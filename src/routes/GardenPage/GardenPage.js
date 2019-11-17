import React from 'react'
import SinglePlant from '../../components/SinglePlant/SinglePlant'
import ApiContext from '../../contexts/ApiContext'
import './GardenPage.css'

export default class GardenPage extends React.Component {

  static defaultProps = {
    plants: [],
    notes: []
  }
  
  static contextType = ApiContext;

  render() {
    return (
      <section className='GardenPage'>
        <h2>Garden</h2>
        <div className='input'>
            <label htmlFor='plant-filter-input'>
              Filter garden by:
            </label>
            <select id='plant-filter-input'>
                <option value="type">Print Plants</option>
            </select>
          </div>          
          <div className='input'>
            <label htmlFor='plant-sort-input'>
              Sort garden by:
            </label>
            <select id='input'>
                <option value="name">Name</option>
            </select>
          </div>
        <ul>
          {this.context.plants.map(plant =>
            <li key={plant.gardenId}>
              <SinglePlant
                gardenId={plant.gardenId}
                name={plant.name}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}
