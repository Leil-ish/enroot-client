import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from '../../components/Form/Form'
import PlantApiService from '../../services/plant-api-service'
import PlantContext from '../../contexts/PlantContext'
import {Textarea, Button, Input} from '../../components/Utils/Utils'
import './EditTendOrderPage.css'

export default class EditTendOrderPage extends Component {

  static defaultProps = {
    match: { params: {} },
    onSaveOrderSuccess: () => {},
  }

  static contextType = PlantContext

  handleSubmit = ev => {
    ev.preventDefault()
    const {plant} = this.context
    const {maintenance_needed, frequency, details} = ev.target
    PlantApiService.postOrder(plant.id, maintenance_needed.value, frequency.value, details.value)
      .then(this.context.addOrder)
      .then(() => {
        maintenance_needed.value = ''
        frequency.value = ''
        details.value = ''
      })
      .then(() => {
        this.props.onSaveOrderSuccess()
        this.props.history.push(`/garden/${plant.id}`)
      })
      .catch(this.context.setError)
  }

  componentDidMount() {
    const { plantId } = this.props.match.params
    this.context.clearError()
    PlantApiService.getPlant(plantId)
      .then(this.context.setPlant)
      .catch(this.context.setError)
    PlantApiService.getPlantOrders(plantId)
      .then(this.context.setOrders)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearPlant()
  }

  render() {

    const plant = this.context || {content: ''}
    console.log(this.context)

    return (
      <section className='EditTendOrderPage'>
        <h2>
          Add Order for {plant.name}
        </h2>
        <Form 
          className='AddOrderForm'
          aria-label='Add-order-form'
          onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='order-name-input'>
              Maintenance Needed:
            </label>
            <br/>
            <Input required type='text' id='maintenance_needed' name='maintenance_needed' aria-label='Order name'/>
          </div>
          <div className='frequency-select'>
            <label htmlFor='order-frequency-select'>
              This needs to be done
            </label>
            <select required id='frequency' name='frequency' aria-label='Frequency select'>
              <option value='Once Daily'>Once Daily</option>
              <option value='Twice Daily'>Twice Daily</option>
              <option value='Thrice Daily'>Thrice Daily</option>
              <option value='Once Weekly'>Once Weekly</option>
              <option value='Twice Weekly'>Twice Weekly</option>
              <option value='Thrice Weekly'>Thrice Weekly</option>
              <option value='Once Monthly'>Once Monthly</option>
              <option value='Twice Monthly'>Twice Monthly</option>
              <option value='Thrice Monthly'>Thrice Monthly</option>
              <option value='Other'>Other (See Details)</option>
            </select>
          </div>
          <div className='text'>
            <label htmlFor='order-content-input'>
              Details:
            </label>
            <br/>
            <Textarea
              required
              aria-label='Details of maintenance needed'
              name='details'
              id='details'
              cols='30'
              rows='3'
              placeholder='Add any instructions or details...'>
          </Textarea>
          </div>
          <div className='buttons'>
            <Button type='submit' className='Add-order-button' onClick={this.handleAddOrder}>
              Add Order
            </Button>
            <Link
              to='/garden'
              type='button'
              className='Cancel-add-order-button'
            >
              Cancel
            </Link>
          </div>
        </Form>
      </section>
    )
  }
}