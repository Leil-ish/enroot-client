import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './ApiPlant.css'

class ApiPlant extends Component {
  render() {
    
    let common_name;
    if (this.props.common_name) {
      author = this.props.common_name;
    }
    else (
      common_name = "No common name listed"
    )

    let scientific_name;
    if (this.props.scientific_name) {
      scientific_name = this.props.scientific_name;
    }
    else (
      scientific_name = "No scientific name listed."
    )

    return (
      <ul className = 'api-plant'>
          <h3>Common Name: {this.props.common_name}</h3>
          <h4>Scientific Name: {this.props.scientific_name}</h4>
          <div className = 'api-plant-content'>
          </div>
          <div className='buttons'>
            <Link
              to='/garden'
              type='button'
              className='Add-plant-button'
            >
            <br />
              Add plant to Garden
            </Link>
          </div>
      </ul>
    );
  }
}

export default ApiPlant;