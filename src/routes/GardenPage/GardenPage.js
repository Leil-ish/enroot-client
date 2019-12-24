import React from 'react'
import GardenResults from '../../components/GardenResults/GardenResults'
import Filters from '../../components/Filters/Filters'
import GardenContext from '../../contexts/GardenContext'
import PlantApiService from '../../services/plant-api-service'
import {Section} from '../../components/Utils/Utils'
import './GardenPage.css'

export default class GardenPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        plants:[],
        error: false,
        plantType: "All",
        property: "common_name",
    };
  }

  handlePlantFilter(plantType) {
    this.setState({
      plantType: plantType
    })
  }

  handlePlantSort(property) {
    this.setState({
      property: property
    })
  }

  static contextType = GardenContext;

  componentDidMount() {
    this.context.clearError()
    PlantApiService.getPlants()
      .then(this.context.setGarden)
      .catch(this.context.setError)
    PlantApiService.getAllTasks()
      .then(this.context.setTaskList)
      .catch(this.context.setError)
  }


  renderGarden() {
    return (
      <section className='GardenPage'>
        <h2>Garden</h2>
        <ul>
            <li>
              <Filters 
                onPlantSort={property => this.handlePlantSort(property)}/>
            </li>
            <li>
              <GardenResults 
                plants={this.context.plants} 
                tasks={this.context.tasks}
                onDeletePlant={this.handleDeletePlant}
                plantFilter={this.state.plantType}
                property={this.state.property}/>
            </li>
        </ul>
      </section>
    )
  }

  render() {
    const {error} = this.context
    return (
      <Section list className='GardenPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderGarden()}
      </Section>
    )
  }

}
