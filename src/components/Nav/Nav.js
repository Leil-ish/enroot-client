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
              <i className="fas fa-sign-out-alt"></i>
            </Link>
          </li>
          <li>
            <Link
              className='GardenNav_link'
              aria-label='Garden-link'
              to={`/garden`}
                >
                <i className="fas fa-plant"></i>
            </Link>
          </li>
          <li>
              <Link
                className='GardenNav_link'
                aria-label='Find-plant-link'
                to={`/find-plant`}
              >
                <i className="fas fa-search"></i>
              </Link>
          </li>
          <li>
              <Link
                className='GardenNav_link'
                aria-label='Add-plant-link'
                to={`/add-plant`}
              >
                <i className="fas fa-plus"></i>
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
