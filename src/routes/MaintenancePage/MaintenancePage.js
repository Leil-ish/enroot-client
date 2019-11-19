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
                note_id={note.note_id}
                common_name={note.common_name}
                scientific_name={note.scientific_name}
                note_name={note.note_name}
                note_content={note.note_content}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}
