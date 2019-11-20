import React from 'react'
import SinglePlant from '../../components/SinglePlant/SinglePlant'
import ApiContext from '../../contexts/ApiContext'
import {findPlant} from '../../garden-helper'
import './SinglePlantPage.css'

export default class SinglePlantPage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const {plants=[]} = this.context
    const {gardenId} = this.props.match.params
    const plant = findPlant(plants, gardenId) || { content: '' }
    return (
      <section className='SinglePlantPage'>
        <SinglePlant
          common_name={plant.common_name}
          scientific_name={plant.scientific_name}
          flower_color={plant.flower_color}
          seedling_vigor={plant.seedling_vigor}
          image={plant.image}
          shade_tolerance={plant.shade_tolerance}
        />
      </section>
    )
  }
}s