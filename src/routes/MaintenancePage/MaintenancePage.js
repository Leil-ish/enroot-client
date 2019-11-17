import React from 'react'
import MaintenanceNote from '../../components/MaintenanceNote/MaintenanceNote'
import ApiContext from '../../contexts/ApiContext'
import './MaintenancePage.css'

export default class MaintenancePage extends React.Component {

  static defaultProps = {
    plants: [],
    notes: []
  }
  
  static contextType = ApiContext;
  
  render() {
    return (
      <section className='MaintenancePage'>
        <ul>
          {this.context.notes.map(note =>
            <li key={note.gardenId}>
              <MaintenanceNote
                gardenId={note.gardenId}
                name={note.name}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}
