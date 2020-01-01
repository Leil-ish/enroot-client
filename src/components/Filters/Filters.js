import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
  
    render() {
  
        return (
            <div className='customize-results'>
                <div className='Sort'>
                    <form className='sort-selection' aria-label='garden-sort'>
                        <label htmlFor='plant-sort-input'>
                        Sort by:
                        </label>
                        <select id='plant-sort' aria-label='garden-sort' onChange={e => this.props.onPlantSort(e.target.value)}>
                            <option value='common_name' aria-label='common_name' defaultValue>Common Name</option>
                            <option value='scientific_name' aria-label='scientific_name'>Scientific Name</option>
                            <option value='flower_color' aria-label='flower_color'>Flower Color</option>
                            <option value='temperature_minimum' aria-label='temperature_minimum'>Temperature Minimum</option>
                        </select>
                    </form>
                </div>
            </div>
        );
      }
}

export default Filters;