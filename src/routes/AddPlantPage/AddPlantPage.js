import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
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
    const {common_name} = ev.target
    PlantApiService.postCustomPlant(common_name.value)
      .then(this.context.addPlant)
      .then(() => {
        common_name.value = ''
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
        <h3>You can add more details and tasks for this plant from your garden menu.</h3>
        <Form 
          className='AddPlantForm'
          aria-label='Add-plant-form'
          onSubmit={this.handleSubmit}
          >
          <div className='field'>
            <label htmlFor='plant-common_name-input'>
              Common Name:
            </label>
            <br/>
            <Input required type='text' name='common_name' id='common_name' aria-label='common name'/>
          </div>
          <div className='buttons'>
            <Button
                type='submit'
                className='Add-plant-button'
              >
                Add plant to Garden
            </Button>
            <Link
              to='/garden'
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

export default withRouter(AddPlantPage)