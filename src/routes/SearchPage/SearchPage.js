import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar';
import PlantContext from '../../contexts/PlantContext'
import Results from '../../components/Results/Results';
import './SearchPage.css'

class SearchPage extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            plants:[],
            error: false,
        };
      }

      static defaultProps = {
        match: { params: {} },
      }
    
      static contextType = PlantContext

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