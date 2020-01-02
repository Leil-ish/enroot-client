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
          <li>Menu</li>
          <hr/>
          <li>
            <Link
              className='GardenNav_logout_link'
              aria-label='Logout'
              onClick={this.handleLogoutClick}
              to='/'>
              <img src='https://i.imgur.com/Mi99rlh.png' alt='logout'></img>
              <span className="tooltiptext">Logout</span>
            </Link>
          </li>
          <li>
            <Link
              className='GardenNav_garden_link GardenNav_link'
              aria-label='Garden-link'
              to={`/garden`}
                >
                <img src='https://i.imgur.com/4HDGyjW.png' alt='garden'></img>
                <span className="tooltiptext">View Garden</span>
            </Link>
          </li>
          <li>
              <Link
                className='GardenNav_add_link GardenNav_link'
                aria-label='Add-plant-link'
                to={`/add-plant`}
              >
                <img src='https://i.imgur.com/9YkbxkT.png' alt='add-plant'></img>
                <span className="tooltiptext">Add a Plant</span>
              </Link>
          </li>
          <li>
              <Link
                className='GardenNav_tend_link GardenNav_link'
                aria-label='Add-tasks-link'
                to={`/tasks`}
              >
                <img src='https://i.imgur.com/VtEly61.png' alt='tend-tasks'></img>
                <span className="tooltiptext">View Tasks</span>
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