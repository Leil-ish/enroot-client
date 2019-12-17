import React from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Nav.css';

export default class GardenNav extends React.Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='GardenNav_main'>
        <ul>
          <li>
            <Link
              className='GardenNav_logout_link'
              aria-label='Logout'
              onClick={this.handleLogoutClick}
              to='/'>
              <img src='https://i.imgur.com/dzjzyDO.png' alt='logout'></img>
              <span className="tooltiptext">Logout</span>
            </Link>
          </li>
          <li>
            <Link
              className='GardenNav_garden_link GardenNav_link'
              aria-label='Garden-link'
              to={`/garden`}
                >
                <img src='https://i.imgur.com/rMJYeD7.png' alt='garden'></img>
                <span className="tooltiptext">View Garden</span>
            </Link>
          </li>
          {/*<li>
              <Link
                className='GardenNav_find_link GardenNav_link'
                aria-label='Find-plant-link'
                to={`/find-plant`}
              >
                <img src='https://i.imgur.com/5ZassYs.png' alt='find-plant'></img>
                <span className="tooltiptext">Search for a Plant</span>
              </Link>
          </li>*/}
          <li>
              <Link
                className='GardenNav_add_link GardenNav_link'
                aria-label='Add-plant-link'
                to={`/add-plant`}
              >
                <img src='https://i.imgur.com/Juh9Oa4.png' alt='add-plant'></img>
                <span className="tooltiptext">Add a Plant Manually</span>
              </Link>
          </li>
          <li>
              <Link
                className='GardenNav_tend_link GardenNav_link'
                aria-label='Add-orders-link'
                to={`/orders`}
              >
                <img src='https://i.imgur.com/OjfBDVb.png' alt='tend-orders'></img>
                <span className="tooltiptext">View Tend Orders</span>
              </Link>
          </li>
        </ul>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='GardenNav_landing'>
        <ul>
          <li>
            <Link
              className='GardenNav_landing'
              to='/signup'>
              Register
            </Link>
          </li>
          <li>
            <Link
              className='GardenNav_landing'
              to='/login'>
              Log in
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className='GardenNav'>
        <ul className='GardenNav_list'>
            <li>
              {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
            </li>
        </ul>
      </div>
    )
  }
}