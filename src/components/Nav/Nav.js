import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default class GardenNav extends React.Component {

  render() {
    return (
      <div className='GardenNav'>
        <ul className='GardenNav_list'>
            <li>
              <Link
                className='GardenNav_link'
                to={`/garden`}
              >
                Garden
              </Link>
            </li>
            <li>
              <Link
                className='GardenNav_link'
                to={`/notes`}
              >
                Notes
              </Link>
            </li>
            <li>
              <Link
                className='GardenNav_link'
                to={`/find-plant`}
              >
                Find A Plant
              </Link>
            </li>
            <li>
              <Link
                className='GardenNav_link'
                to={`/add-plant`}
              >
                Add A Plant
              </Link>
            </li>
        </ul>
      </div>
    )
  }
}
