import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './SinglePlant.css'

class SinglePlant extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  render() {

      const {gardenId} = this.props
    
      return (
          <div className = 'single-plant'>
            <ul>
              <div className='buttons'>
              <Link
                to={`/garden/${gardenId}/add-note`}
                type='button'
                className='Add-note-button'
              >
              <br />
                Add a note to this plant
              </Link>
              <Link
                to={`/notes/${gardenId}`}
                type='button'
                className='View-notes-button'
              >
              <br />
                View notes for this plant
              </Link>
            </div>
          </ul>
        </div>
      );
  }
}

export default SinglePlant;