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
    let {plant, name, modified, content, gardenId} = this.props
    console.log(this.props)

    return (
        <ul className = 'single-note'>
            <Link
              to={`/notes/${gardenId}`}
              type='button'
              className='Add-note-button'>
                <h2>Note for: <i>{plant}</i></h2>
              </Link>
            <h3>{name}</h3>
            <h4>{modified}</h4>
            <p>{content}</p>
            <Link
                to={`/garden/${gardenId}/add-note`}
                type='button'
                className='Add-note-button'
              >
            Add a New Note for <i>{plant}</i>
            </Link>
        </ul>
    );
  }
}

export default MaintenanceNote;