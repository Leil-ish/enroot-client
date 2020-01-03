import React, {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import GardenNav from '../Nav/Nav'
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import AddPlantPage from '../../routes/AddPlantPage/AddPlantPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import GardenPage from '../../routes/GardenPage/GardenPage'
import TaskPage from '../../routes/TaskPage/TaskPage'
import SinglePlantPage from '../../routes/SinglePlantPage/SinglePlantPage'
import SearchPage from '../../routes/SearchPage/SearchPage'
import GardenContext from '../../contexts/GardenContext';
import EditTendTaskPage from '../../routes/EditTendTaskPage/EditTendTaskPage'
import EditPlantPage from '../../routes/EditPlantPage/EditPlantPage'
import PlantTasksPage from '../../routes/PlantTasksPage/PlantTasksPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import Error from '../Error/Error'
import {getPlantsForGarden, getTasksForPlant} from '../../garden-helper'
import './App.css';

class App extends Component {

  static contextType = GardenContext;

  constructor(props){
    super(props);
    this.state = {
      hasError: false,
      plants:[],
      tasks:[],
      error: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({isLoading: false})
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return {hasError: true}
  }

  handleDeleteTask = taskId => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== taskId)
    })
  }

  handleDeletePlant = plantId => {
    this.setState({
      plants: this.state.plants.filter(plant => plant.id !==plantId)
    })
  }


  renderMainRoutes() {
    const {plants, tasks} = this.context
    return (
      <div className='App-main'>
        {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
              `{['/garden/:plantId'].map(path =>
                <PrivateRoute
                  exact
                  key={path}
                  path={path}
                  component={routeProps => {    
                    const {plantId} = routeProps.match.params
                    const plantsForGarden = getPlantsForGarden(plants, plantId)
                    return (
                      <SinglePlantPage
                        {...routeProps}
                        plants={plantsForGarden}
                      />
                    )
                  }}
                />
              )}
              <PrivateRoute
                exact
                path='/garden/:plantId/tasks'
                component={routeProps => {
                  const {plantId} = routeProps.match.params
                  const tasksForPlant = getTasksForPlant(tasks, plantId)
                  return (
                    <PlantTasksPage
                      {...routeProps}
                      tasks={tasksForPlant}
                    />
                  )
                }}
              />
            <PrivateRoute
              path='/find-plant'
              component={SearchPage}
            />
            <PrivateRoute
              path='/add-plant'
              component={AddPlantPage}
            />
            {['/garden/:plantId/add-task'].map(path =>
              <PrivateRoute
                exact
                key={path}
                path={path}
                component={routeProps => {
                  const {plantId} = routeProps.match.params
                  const tasksForPlant = getTasksForPlant(tasks, plantId)
                  return (
                    <EditTendTaskPage
                      {...routeProps}
                      tasks={tasksForPlant}
                    />
                  )
                }}
              />
            )}
            {['/garden/:plantId/edit-plant'].map(path =>
              <PrivateRoute
                exact
                key={path}
                path={path}
                component={routeProps => {
                  return (
                    <EditPlantPage
                      {...routeProps}
                    />
                  )
                }}
              />
            )}
            <Route
              exact path='/'
              component={LandingPage}
            />
            <PublicOnlyRoute
              path='/login'
              component={LoginPage}
            />
            <PublicOnlyRoute
              path='/signup'
              component={SignUpPage}
            />
            <PrivateRoute
              path='/garden'
              component={GardenPage}
            />
            <PrivateRoute
              path='/tasks'
              component={TaskPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
      </div>
    )
  }

  renderNavRoutes() {
    const {plants, tasks} = this.state
    return (
      <div className='App-nav'>
        {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          {['/garden/:plantId'].map(path =>
            <PrivateRoute
              exact
              key={path}
              path={path}
              component={routeProps =>
                <GardenNav
                  plants={plants}
                  tasks={tasks}
                  {...routeProps}
                />
              }
            />
          )}
          <PrivateRoute
            exact
            path='/garden/:plantId/tasks'
            component={routeProps => {
              const {plantId} = routeProps.match.params
              const tasksForPlant = getTasksForPlant(tasks, plantId)
              return (
                <GardenNav
                  {...routeProps}
                  tasksForPlant={tasksForPlant}
                />
              )
            }}
            />
            <Route
              exact path='/'
              component={GardenNav}
            />
            <PrivateRoute
              exact
              path='/garden'
              component={GardenNav}
            />
            <PrivateRoute
              exact
              path='/tasks'
              component={GardenNav}
            />
            <PrivateRoute
              path='/find-plant'
              component={GardenNav}
            />
            <PrivateRoute
              path='/add-plant'
              component={GardenNav}
            />
            <PrivateRoute
              path='/garden/:plantId/edit-plant'
              component={GardenNav}
            />
            <PrivateRoute
              path='/garden/:plantId/add-task'
              component={GardenNav}
            />
      </div>
    )
  }

  render() {
    return (
        <div className='App'>
          <header className='App_header'>
            <h1>
              <Link to='/'>Enroot</Link>
            </h1>
          </header>
          <main className='App_main'>
            <Error>
              {this.renderMainRoutes()}
            </Error>
          </main>
          <nav className='App_nav'>
            <Error>
              {this.renderNavRoutes()}
            </Error>
          </nav>
        </div>
    )
  }
}

export default App