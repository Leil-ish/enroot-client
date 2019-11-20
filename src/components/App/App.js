import React, {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Nav from '../Nav/Nav'
import AddPlantPage from '../../routes/AddPlantPage/AddPlantPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import GardenPage from '../../routes/GardenPage/GardenPage'
import MaintenancePage from '../../routes/MaintenancePage/MaintenancePage'
import SinglePlantPage from '../../routes/SinglePlantPage/SinglePlantPage'
import SearchPage from '../../routes/SearchPage/SearchPage'
import EditMaintenanceOrderPage from '../../routes/EditMaintenanceOrderPage/EditMaintenanceOrderPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import ApiContext from '../../contexts/ApiContext'
import dummyStore from '../../dummy-store'
import {findNote, getPlantsForGarden, getNotesForPlant} from '../../garden-helper'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      plants:[],
      notes:[],
      error: false,
    };
  }
  
  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600)
  }

  renderMainRoutes() {
    const {plants, notes} = this.context
    return (
      <>
        <Switch>
          `{['/garden/:gardenId'].map(path =>
            <Route
              exact
              key={path}
              path={path}
              render={routeProps => {    
                const {gardenId} = routeProps.match.params
                const plantsForGarden = getPlantsForGarden(plants, gardenId)
                return (
                  <SinglePlantPage
                    {...routeProps}
                    plants={plantsForGarden}
                  />
                )
              }}
            />
          )}
          <Route
            path='/find-plant'
            component={SearchPage}
          />
          <Route
            path='/add-plant'
            component={AddPlantPage}
          />
          `{['/garden/:gardenId/add-note'].map(path =>
            <Route
              exact
              key={path}
              path={path}
              render={routeProps => {
                const {gardenId} = routeProps.match.params
                const notesForPlant = getNotesForPlant(notes, gardenId)
                return (
                  <EditMaintenanceOrderPage
                    {...routeProps}
                    notes={notesForPlant}
                  />
                )
              }}
            />
          )}
            />
            <Route
              exact path='/'
              component={LandingPage}
            />
            <Route
              path='/login'
              component={LoginPage}
            />
            <Route
              path='/signup'
              component={SignUpPage}
            />
            <Route
              path='/garden'
              component={GardenPage}
            />
            <Route
              path='/maintenance-notes'
              component={MaintenancePage}
            />
            <Route
              component={NotFoundPage}
            />
        </Switch>
      </>
    )
  }

  renderNavRoutes() {
    const {plants, notes} = this.state
    return (
      <>
       {['/garden/:gardenId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps =>
              <Nav
                plants={plants}
                notes={notes}
                {...routeProps}
              />
            }
          />
        )}
        <Route
          exact
          path='/maintenance-notes/:gardenId'
          render={routeProps => {
            const {gardenId} = routeProps.match.params
            const note = findNote(notes, gardenId) || {}
            return (
              <Nav
                {...routeProps}
                note={note}
              />
            )
          }}
          />
          <Route
            exact
            path='/garden'
            component={Nav}
          />
          <Route
            exact
            path='/maintenance-notes'
            component={Nav}
          />
          <Route
            path='/find-plant'
            component={Nav}
          />
          <Route
            path='/add-plant'
            component={Nav}
          />
          <Route
            path='/garden/:gardenId/add-maintenance-note'
            component={Nav}
          />
      </>
    )
  }

  render() {
    const value = {
      plants: this.state.plants,
      notes: this.state.notes,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <header className='App_header'>
            <h1>
              <Link to='/'>Enroot</Link>
              {' '}
            </h1>
            <h2>Your Digital Garden</h2>
          </header>
          <main className='App_main'>
            {this.renderMainRoutes()}
          </main>
          <nav className='App_nav'>
            {this.renderNavRoutes()}
          </nav>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App