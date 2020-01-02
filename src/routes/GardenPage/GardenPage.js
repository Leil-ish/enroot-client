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
        property: "common_name",
    };
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
  }


  renderGarden() {
    return (
      <section className='GardenPage'>
        <h2>GARDEN</h2>
        <Filters 
                onPlantSort={property => this.handlePlantSort(property)}/>
        <hr/>
        <ul>
            <li>
              <GardenResults 
                plants={this.context.plants} 
                onDeletePlant={this.handleDeletePlant}
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
          ? <p className='error'>There was an error, try again.</p>
          : this.renderGarden()}
      </Section>
    )
  }

}
