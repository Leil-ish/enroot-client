import React, {Component} from 'react';
import Form from '../Form/Form';
import './SearchBox.css'


class SearchBox extends Component {

    render() {

    return (
      <div>
          <Form className="searchBar" method='POST' action='/trefle-searchterm' >
              <label htmlFor="search">Search: </label>
              <input 
              type="text" 
              placeholder="Search for a plant" 
              id="search" />
              <button type="submit" className='search-submit'>Search</button>
          </Form>
      </div>
      
    );
  }
}

export default SearchBox;
