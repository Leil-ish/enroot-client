import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar';
import Results from '../../components/Results/Results';
import './SearchPage.css'

class SearchPage extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            plants:[],
            error: false,
            printType: "All",
            plantType: "All"
        };
      }
    
    
      handlePlantFilter(plantType) {
        console.log(plantType)
        this.setState({
          plantType: plantType
        })
      }

      handleSubmit(searchTerm) {
        return fetch(`https://trefle.io/api/plants?common_name=${searchTerm}`, {
          mode: "no-cors",
          headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        })
        .then(response => {
          if(!response.ok) {
            throw new Error('Something went wrong, please try again later.');
          }
          this.setState({
            error: true
          })
          return response;
        })
        .then(response => response.json())
        .then(data => {
          if(!data.items) {
            throw new Error('There are no results for that search. Try using different search terms or manually add the plant.');
          }
          this.setState({
            error: true
          })
          return data;
        })
        .then(data => {
          this.setState({
           plants: data.items
          })
        })
        .catch(err => this.setState({
          error: err.message
        }))
      }

      render() {
        
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
              onSubmit={searchTerm => this.handleSubmit(searchTerm)}
              onPlantFilter={plantType => this.handlePlantFilter(plantType)}/>
             {error}
            <Results 
              plants={this.state.plants} 
              plantFilter={this.state.plantType}/>
          </main>
        );
      }
    }

export default SearchPage;
