import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from '../../components/Form/Form'
import PlantApiService from '../../services/plant-api-service'
import PlantContext from '../../contexts/PlantContext'
import {Textarea, Button, Input} from '../../components/Utils/Utils'
import './EditTendTaskPage.css'

export default class EditTendTaskPage extends Component {

  static defaultProps = {
    match: { params: {} },
    onSaveTaskSuccess: () => {},
  }

  static contextType = PlantContext

  handleSubmit = ev => {
    ev.preventDefault()
    const {plant, task} = this.context
    const {maintenance_needed, frequency, details} = ev.target
    PlantApiService.postTask(plant.id, plant.common_name, maintenance_needed.value, frequency.value, details.value)
      .then(this.context.addTask)
      .then(() => {
        task.plant_common_name=''
        maintenance_needed.value = ''
        frequency.value = ''
        details.value = ''
      })
      .then(() => {
        this.props.onSaveTaskSuccess()
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
    PlantApiService.getPlantTasks(plantId)
      .then(this.context.setTasks)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearPlant()
  }

  render() {

    const {plant} = this.context

    return (
      <section className='EditTendTaskPage'>
        <h2>
          Add Task for {plant.common_name}
        </h2>
        <hr/>
        <Form 
          className='AddTaskForm'
          aria-label='Add-task-form'
          onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='task-name-input'>
              Maintenance Needed:
            </label>
            <br/>
            <Input required type='text' id='maintenance_needed' name='maintenance_needed' aria-label='Task name'/>
          </div>
          <div className='frequency-select'>
            <label htmlFor='task-frequency-select'>
              Frequency:
            </label><br/>
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
          <div className='details'>
            <label htmlFor='task-content-input'>
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
            <Button type='submit' className='Add-task-button' onClick={this.handleAddTask}>
              Add Task
            </Button>
            <Link
              to='/garden'
              type='button'
              className='Cancel-add-task-button'
            >
              Cancel
            </Link>
          </div>
        </Form>
      </section>
    )
  }
}