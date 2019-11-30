import React, {Component} from 'react';
import PlantContext from '../../contexts/PlantContext'
import PlantApiService from '../../services/plant-api-service'
import {Section, Button} from '../../components/Utils/Utils'
import Form from '../../components/Form/Form'
import './EditPlantPage.css'

export default class EditPlantPage extends Component {

    static defaultProps = {
      match: { params: {} },
    }

    constructor(props){
      super(props);
        this.state = {
          open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
      }

    //Collapsible for the plant description
    togglePanel(e){
      this.setState({open: !this.state.open})
      }
  
    static contextType = PlantContext

    handleSubmit = ev => {
      ev.preventDefault()
      const {plant} = this.context
      const {common_name, scientific_name} = ev.target
      
      PlantApiService.patchPlant(plant.id, common_name.value, scientific_name.value)
        .then(this.context.updatePlant)
        .then(() => {
          common_name.value = ''
          scientific_name.value =''
        })
        .then(() => {
          this.props.history.push(`/garden`)
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
  
    renderPlant() {
      const {plant} = this.context
      return (
      <div className='PlantEditPage_Content'>
        <h2>{plant.common_name}</h2>
        <hr/>
        <div onClick={(e)=>this.togglePanel(e)} className = 'collapsible'>
            <p className='Description-button'>View Full Description</p>
            {this.state.open ? (
              <div className='api-plant-content'>
                <PlantContent plant={plant} />
              </div>) : null}
        </div>
        <hr/>
        <Form className='EditPlantForm' aria-label='Edit-plant-form'
          onSubmit={this.handleSubmit}>
          <Button type='submit' name='editPlant' className='Submit-plant-edits'>
            Submit Changes
          </Button>
        </Form>
      </div>)
    }
  
    render() {
      const {error, plant} = this.context
      let content
      if (error) {
        content = (error.error === `Plant doesn't exist`)
          ? <p className='red'>Plant not found</p>
          : <p className='red'>There was an error</p>
      } else if (!plant.id) {
        content = <div className='loading' />
      } else {
        content = this.renderPlant()
      }
      return (
        <Section className='PlantEditPage'>
          {content}
        </Section>
      )
    }
  }
  
  function PlantContent({ plant }) {
    return (
      <div>
        <p className='PlantEditPage_content'>
          {plant.description}
        </p>
      </div>
    )
}