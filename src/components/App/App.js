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
import TendPage from '../../routes/TendPage/TendPage'
import SinglePlantPage from '../../routes/SinglePlantPage/SinglePlantPage'
import SearchPage from '../../routes/SearchPage/SearchPage'
import GardenContext from '../../contexts/GardenContext';
import EditTendOrderPage from '../../routes/EditTendOrderPage/EditTendOrderPage'
import EditPlantPage from '../../routes/EditPlantPage/EditPlantPage'
import PlantOrdersPage from '../../routes/PlantOrdersPage/PlantOrdersPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import Error from '../Error/Error'
import {getPlantsForGarden, getOrdersForPlant} from '../../garden-helper'
import './App.css';

class App extends Component {

  static contextType = GardenContext;

  constructor(props){
    super(props);
    this.state = {
      hasError: false,
      plants:[],
      orders:[],
      error: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return {hasError: true}
  }

  handleDeleteOrder = orderId => {
    this.setState({
      orders: this.state.orders.filter(order => order.id !== orderId)
    })
  }

  handleDeletePlant = plantId => {
    this.setState({
      plants: this.state.plants.filter(plant => plant.id !==plantId)
    })
  }


  renderMainRoutes() {
    const {plants, orders} = this.context
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
                path='/garden/:plantId/orders'
                component={routeProps => {
                  const {plantId} = routeProps.match.params
                  const ordersForPlant = getOrdersForPlant(orders, plantId)
                  return (
                    <PlantOrdersPage
                      {...routeProps}
                      orders={ordersForPlant}
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
            {['/garden/:plantId/add-order'].map(path =>
              <PrivateRoute
                exact
                key={path}
                path={path}
                component={routeProps => {
                  const {plantId} = routeProps.match.params
                  const ordersForPlant = getOrdersForPlant(orders, plantId)
                  return (
                    <EditTendOrderPage
                      {...routeProps}
                      orders={ordersForPlant}
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
              path='/orders'
              component={TendPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
      </div>
    )
  }

  renderNavRoutes() {
    const {plants, orders} = this.state
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
                  orders={orders}
                  {...routeProps}
                />
              }
            />
          )}
          <PrivateRoute
            exact
            path='/garden/:plantId/orders'
            component={routeProps => {
              const {plantId} = routeProps.match.params
              const ordersForPlant = getOrdersForPlant(orders, plantId)
              return (
                <GardenNav
                  {...routeProps}
                  ordersForPlant={ordersForPlant}
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
              path='/orders'
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
              path='/garden/:plantId/add-order'
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
            <h2>Digital Garden Tend Tracker</h2>
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