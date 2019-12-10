import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from '../../components/Form/Form'
import PlantContext from '../../contexts/PlantContext'
import PlantApiService from '../../services/plant-api-service'
import {Button, Input} from '../../components/Utils/Utils';
import './AddPlantPage.css'

class AddPlantPage extends Component {
  
  static defaultProps = {
    match: { params: {} },
    onSavePlantSuccess: () => {},
  }

  static contextType = PlantContext

  handleSubmit = ev => {
    ev.preventDefault()
    const {common_name, scientific_names, flower_color, seedling_vigor, shade_tolerance} = ev.target
    console.log(ev.target)
    PlantApiService.postCustomPlant(common_name.value, scientific_names.value, flower_color.value, seedling_vigor.value, shade_tolerance.value)
      .then(this.context.addPlant)
      .then(() => {
        common_name.value = ''
        scientific_names.value = ''
        flower_color.value = ''
        seedling_vigor.value = ''
        shade_tolerance.value = ''
      })
      .then(() => {
        this.props.onSavePlantSuccess()
        this.props.history.push(`/garden`)
      })
      .catch(this.context.setError)
  }

  render() {

    return (
      <section className='AddPlantPage'>
        <h2>
          Add a Plant to Your Garden
        </h2>
        <h3>Don't know some of this info but think it would be helpful? Search for your plant 
          <a href='https://plants.sc.egov.usda.gov/java/' target='_blank' rel='noopener noreferrer'>here!</a>
        </h3>
        <Form 
          className='AddPlantForm'
          aria-label='Add-plant-form'
          onSubmit={this.handleSubmit}
          >
          <div className='field'>
            <label htmlFor='plant-common-name-input'>
              Common Name
            </label>
            <Input type='text' id='plant-common-name-input' aria-label='common name input'/>
          </div>
          <div className='field'>
            <label htmlFor='plant-scientific-name-input'>
              Scientific Name
            </label>
            <Input type='text' id='plant-scientific-name-input' aria-label='scientific name input'/>
          </div>
          <div className='field'>
            <label htmlFor='plant-flower-color-Input'>
              Flower Color
            </label>
            <Input type='text' id='plant-flower-color-Input' aria-label='flower color input'/>
          </div>
          <div className='field'>
            <label htmlFor='plant-seedling-vigor-Input'>
              Seedling Vigor
            </label>
            <Input type='text' id='plant-seedling-vigor-Input' aria-label='seedling vigor input'/>
          </div>
          <div className='field'>
            <label htmlFor='plant-shade-tolerance-Input'>
              Shade Tolerance
            </label>
            <Input type='text' id='plant-shade-tolerance-Input' aria-label='shade tolerance input'/>
          </div>
          <div className='buttons'>
            <Button
                type='submit'
                className='Add-plant-button'
              >
                Add Plant to Garden
            </Button>
            <Link
              to='/find-plant'
              type='button'
              className='Cancel-add-plant-button'
            >
              Cancel
            </Link>
          </div>
        </Form>
      </section>
    )
  }
}

export default AddPlantPage;