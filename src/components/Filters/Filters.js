import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
  
    render() {
  
    return (
        <div className="Filters">
            <div className="selection">
                <label htmlFor="plant-type">Plant Type: </label>
                <select id="plant-type" onChange={e => this.props.onPlantFilter(e.target.value)}>
                    <option value="All" defaultValue>All</option>
                </select>
            </div>
        </div>
    );
  }
}

export default Filters;