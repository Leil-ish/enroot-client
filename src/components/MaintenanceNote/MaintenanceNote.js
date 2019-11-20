import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './MaintenanceNote.css'

class MaintenanceNote extends Component {

  static defaultProps = {
    match: {
      params: {}
    }
  }

  render() {
    let {common_name, scientific_name, note_name, note_content, gardenId} = this.props
    console.log(this.props)

    return (
        <ul className = 'single-note'>
            <Link
              to={`/maintenance-notes/${gardenId}`}
              type='button'
              className='Add-note-button'>
                <h2>Note for: <i>{common_name}</i></h2>
              </Link>
            <h3>{scientific_name}</h3>
            <h3>{note_name}</h3>
            <p>{note_content}</p>

            <Link
                to={`/garden/${gardenId}/add-note`}
                type='button'
                className='Add-note-button'
              >
            Add a New Note for <i>{common_name}</i>
            </Link>
        </ul>
    );
  }
}

export default MaintenanceNote;