import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PlantContext from '../../contexts/PlantContext'
import PlantApiService from '../../services/plant-api-service'
import {Section, Button, Input} from '../../components/Utils/Utils'
import Form from '../../components/Form/Form'
import './EditPlantPage.css'

export default class EditPlantPage extends Component {

    static defaultProps = {
      match: { params: {} },
      onSavePlantSuccess: () => {},
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
      const {scientific_name, lifespan, growth_rate, growth_period, 
        temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
        resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
        moisture_use, seedling_vigor, flower_color, foliage_color} = ev.target
      PlantApiService.patchPlant(plant.id, scientific_name.value, lifespan.value, growth_rate.value, growth_period.value, 
        temperature_minimum.value, shade_tolerance.value, precipitation_minimum.value, precipitation_maximum.value, 
        resprout_ability.value, family_common_name.value, duration.value, drought_tolerance.value, frost_free_days_minimum.value, 
        moisture_use.value, seedling_vigor.value, flower_color.value, foliage_color.value)
        .then(this.context.updatePlant)
        .then(() => {
          scientific_name.value = ''
          lifespan.value = ''
          growth_rate.value = ''
          growth_period.value = ''
          temperature_minimum.value = ''
          shade_tolerance.value = ''
          precipitation_minimum.value = ''
          precipitation_maximum.value = ''
          resprout_ability.value = ''
          family_common_name.value = ''
          duration.value = ''
          drought_tolerance.value = ''
          frost_free_days_minimum.value = ''
          moisture_use.value = ''
          seedling_vigor.value = ''
          flower_color.value = ''
          foliage_color.value = ''
        })
        .then(() => {
          this.props.onSavePlantSuccess()
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
      <Section className='PlantEditPage'>
        <h2>
          Add Details About Your {plant.common_name}
        </h2>
        <hr/>
        <h3>Fill in as much as you know about your plant! Don't know some of this info but think it would be helpful? Search for your plant in the 
           <a href='https://plants.sc.egov.usda.gov/java/' className='usda-link' target='_blank' rel='noopener noreferrer'> USDA Plants Database</a>.
        </h3>
        <hr/>
        <Form className='EditPlantForm' aria-label='Edit-plant-form' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='scientific-name-input'>
              Scientific Name:
            </label><br/>
            <Input type='text' id='scientific_name' name='scientific_name' aria-label='scientific name input' placeholder={plant.scientific_name} />
          </div>
          <div className='field'>
            <label htmlFor='lifespan-input'>
              Lifespan:
            </label><br/>
            <Input type='text' id='lifespan' name='lifespan' aria-label='lifespan input' placeholder={plant.lifespan}/>
          </div>
          <div className='field'>
            <label htmlFor='growth-rate-input'>
              Growth Rate:
            </label><br/>
            <Input type='text' id='growth_rate' name='growth_rate' aria-label='growth rate input' placeholder={plant.growth_rate}/>
          </div>
          <div className='field'>
            <label htmlFor='growth-period-input'>
              Growth Period:
            </label><br/>
            <Input type='text' id='growth_period' name='growth_period' aria-label='growth period input' placeholder={plant.growth_period}/>
          </div>
          <div className='field'>
            <label htmlFor='temperature-minimum-input'>
              Temperature Minimum:
            </label><br/>
            <Input type='text' id='temperature_minimum' name='temperature_minimum' aria-label='temperature minimum input' placeholder={plant.temperature_minimum}/>
          </div>
          <div className='field'>
            <label htmlFor='shade-tolerance-input'>
              Shade Tolerance:
            </label><br/>
            <Input type='text' id='shade_tolerance' name='shade_tolerance' aria-label='shade tolerance input'placeholder={plant.shade_tolerance}/>
          </div>
          <div className='field'>
            <label htmlFor='precipitation-minimum-input'>
              Precipitation Minimum:
            </label><br/>
            <Input type='text' id='precipitation_minimum' name='precipitation_minimum' aria-label='precipitation minimum input' placeholder={plant.precipitation_minimum}/>
          </div>
          <div className='field'>
            <label htmlFor='precipitation-maximum-input'>
              Precipitation Maximum:
            </label><br/>
            <Input type='text' id='precipitation_maximum' name='precipitation_maximum' aria-label='precipitation maximum input' placeholder={plant.precipitation_maximum}/>
          </div>
          <div className='field'>
            <label htmlFor='resprout-ability-input'>
              Resprout Ability:
            </label><br/>
            <Input type='text' id='resprout_ability' name='resprout_ability' aria-label='resprout ability input' placeholder={plant.resprout_ability}/>
          </div>
          <div className='field'>
            <label htmlFor='family-common-name-input'>
              Family Common Name:
            </label><br/>
            <Input type='text' id='family_common_name' name='family_common_name' aria-label='family common name input' placeholder={plant.family_common_name}/>
          </div>
          <div className='field'>
            <label htmlFor='duration-input'>
              Duration:
            </label><br/>
            <Input type='text' id='duration' name='duration' aria-label='duration input' placeholder={plant.duration}/>
          </div>
          <div className='field'>
            <label htmlFor='drought-tolerance-input'>
              Drought Tolerance:
            </label><br/>
            <Input type='text' id='drought_tolerance' name='drought_tolerance' aria-label='drought tolerance input' placeholder={plant.drought_tolerance}/>
          </div>
          <div className='field'>
            <label htmlFor='frost-free-days-input'>
              Frost-Free Days Minimum:
            </label><br/>
            <Input type='text' id='frost_free_days_minimum' name='frost_free_days_minimum' aria-label='frost free days minimum input' placeholder={plant.frost_free_days_minimum}/>
          </div>
          <div className='field'>
            <label htmlFor='moisture-use-input'>
              Moisture Use:
            </label><br/>
            <Input type='text' id='moisture_use' name='moisture_use' aria-label='moisture use input' placeholder={plant.moisture_use} />
          </div>
          <div className='field'>
            <label htmlFor='seedling-vigor-input'>
              Seedling Vigor:
            </label><br/>
            <Input type='text' id='seedling_vigor' name='seedling_vigor' aria-label='seedling vigor input' placeholder={plant.seedling_vigor}/>
          </div>
          <div className='field'>
            <label htmlFor='flower-color-input'>
              Flower Color:
            </label><br/>
            <Input type='text' id='flower_color' name='flower_color' aria-label='flower color input'placeholder={plant.flower_color}/>
          </div>
          <div className='field'>
            <label htmlFor='foliage-color-input'>
              Foliage Color:
            </label><br/>
            <Input type='text' id='foliage_color' name='foliage_color' aria-label='foliage color input' placeholder={plant.foliage_color}/>
          </div>
          <div className='buttons'>
            <Link
              to='/garden'
              type='button'
              className='Cancel-add-plant-button'
            >
              Cancel
            </Link>
            <Button type='submit' className='Submit-plant-edits'>
              Submit Changes
            </Button>
          </div>
        </Form>
      </Section>)
    }
  }
