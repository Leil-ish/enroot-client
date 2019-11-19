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
                <option value="type">Plant Type</option>
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
                common_name={plant.common_name}
                scientific_name={plant.scientific_name}
                flower_color={plant.flower_color}
                seedling_vigor={plant.seedling_vigor}
                image={plant.image}
                shade_tolerance={plant.shade_tolerance}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}
