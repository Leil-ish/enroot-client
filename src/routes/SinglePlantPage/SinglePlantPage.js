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
          name={plant.name}
          author={plant.author}
          categories={plant.categories}
          description={plant.description}
          rating={plant.rating}
        />
      </section>
    )
  }
}