import React, {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Nav from '../Nav/Nav'
import AddPlantPage from '../../routes/AddPlantPage/AddPlantPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import GardenPage from '../../routes/GardenPage/GardenPage'
import TendPage from '../../routes/TendPage/TendPage'
import SinglePlantPage from '../../routes/SinglePlantPage/SinglePlantPage'
import SearchPage from '../../routes/SearchPage/SearchPage'
import EditTendOrderPage from '../../routes/EditTendOrderPage/EditTendOrderPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import ApiContext from '../../contexts/ApiContext'
import dummyStore from '../../dummy-store'
import {findOrder, getPlantsForGarden, getOrdersForPlant} from '../../garden-helper'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      plants:[],
      orders:[],
      error: false,
    };
  }
  
  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600)
  }

  renderMainRoutes() {
    const {plants, orders} = this.context
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
          `{['/garden/:gardenId/add-order'].map(path =>
            <Route
              exact
              key={path}
              path={path}
              render={routeProps => {
                const {gardenId} = routeProps.match.params
                const ordersForPlant = getOrdersForPlant(orders, gardenId)
                return (
                  <EditTendOrderPage
                    {...routeProps}
                    orders={ordersForPlant}
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
              path='/tend-orders'
              component={TendPage}
            />
            <Route
              component={NotFoundPage}
            />
        </Switch>
      </>
    )
  }

  renderNavRoutes() {
    const {plants, orders} = this.state
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
                orders={orders}
                {...routeProps}
              />
            }
          />
        )}
        <Route
          exact
          path='/tend-orders/:gardenId'
          render={routeProps => {
            const {gardenId} = routeProps.match.params
            const order = findOrder(orders, gardenId) || {}
            return (
              <Nav
                {...routeProps}
                order={order}
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
            path='/tend-orders'
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
            path='/garden/:gardenId/add-tend-order'
            component={Nav}
          />
      </>
    )
  }

  render() {
    const value = {
      plants: this.state.plants,
      orders: this.state.orders,
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