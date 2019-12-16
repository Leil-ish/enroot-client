import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'
import PlantApiService from '../../services/plant-api-service'
import SearchBar from '../../components/SearchBar/SearchBar';
import PlantContext from '../../contexts/PlantContext'
import Results from '../../components/Results/Results';
import './SearchPage.css'

class SearchPage extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            plants:[],
            error: false,
        };
      }

      static defaultProps = {
        match: { params: {} },
      }
    
      static contextType = PlantContext

      componentDidMount() {
        this.context.clearError()
        PlantApiService.getApiPlants()
          .then(this.context.setPlant)
          .catch(this.context.setError)
          .then(this.setState({
            isLoading: false,
          }))
      }

      handlePlantFilter(plantType) {
        console.log(plantType)
        this.setState({
          plantType: plantType
        })
      }

      handlePlantSort(property) {
        this.setState({
          property: property
        })
      }

      postSearchTerm(searchTerm) {
        return fetch(`${config.API_ENDPOINT}/garden/find-plant`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify({
            searchTerm
          }),
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      }

      render() {

        console.log(this.state);
        
        const error = this.state.error 
        ? <div className="SearchError">
            <h3>{this.state.error}</h3>
            <Link to={`/add-plant`}>Enter Plant Info Yourself</Link>
          </div> 
        : "";
    
        return (
          <main className='SearchPage'>
            <h2>Search for a Plant to Add to Your Garden</h2>
            <SearchBar 
              onSubmit={searchTerm => this.postSearchTerm(searchTerm)}
              onPlantFilter={plantType => this.handlePlantFilter(plantType)}
              onPlantSort={property => this.handlePlantSort(property)}/>
             {error}
            <Results 
              plants={this.state.plants} 
              plantFilter={this.state.plantType}/>
          </main>
        );
      }
    }

export default SearchPage;