import React, {Component} from 'react';
import SearchBox from '../SearchBox/SearchBox'
import Filters from '../Filters/Filters'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
  
    return (
      <div className='searchTerms'>
        <Filters className 
          onPlantFilter={this.props.onPlantFilter}/>
        <SearchBox className onSubmit={this.props.onSubmit}/>
      </div>
    );
  }
}

export default SearchBar;
