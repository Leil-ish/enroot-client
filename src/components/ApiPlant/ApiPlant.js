import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './ApiPlant.css'

class ApiPlant extends Component {
  render() {
    
    let author;
    if (this.props.volumeInfo.authors) {
      author = this.props.volumeInfo.authors[0];
    }
    else (
      author = "No authors listed"
    )

    let description;
    if (this.props.volumeInfo.description) {
      description = this.props.volumeInfo.description;
    }
    else (
      description = "No description included for this plant."
    )

    return (
      <ul className = 'api-plant'>
          <h3>Name: {this.props.volumeInfo.name}</h3>
          <h4>Author: {author}</h4>
          <div className = 'api-plant-content'>
            <img src={this.props.volumeInfo.imageLinks.thumbnail} alt='plant cover thumbnail'></img>
            <p>Description: {description}</p>
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