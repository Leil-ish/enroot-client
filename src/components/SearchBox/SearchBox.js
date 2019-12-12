import React, {Component} from 'react';
import PlantContext from '../../contexts/PlantContext'
import PlantApiService from '../../services/plant-api-service'
import './SearchBox.css'

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plants:[],
            error: false,
            searchTerm: '',
        };
      }

      searchTermChanged(searchTerm) {
        this.setState({
            searchTerm
        });
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
      }
    
      componentWillUnmount() {
        this.context.clearPlant()
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const search = this.state.searchTerm.split(' ').join('+');
        this.props.onSubmit(search);
    }

    render() {

    return (
      <div>
          <form  className='searchBar' onSubmit={this.handleSubmit}>
              <label htmlFor='search'>Search: </label>
              <input 
              type='text' 
              placeholder='Search for a plant' 
              id='searchTerm' 
              name='searchTerm'
              onChange={e => this.searchTermChanged(e.target.value)} 
              />
              <button type='submit' className='search-submit'>Search</button>
          </form>
      </div>
      
    );
  }
}

export default SearchBox;