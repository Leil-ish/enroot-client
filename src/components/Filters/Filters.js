import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
  
    render() {
  
    return (
        <div className="Filters">
            <div className="selection">
                <label htmlFor="print-type">Print Type: </label>
                <select id="print-type" onChange={e => this.props.onPrintFilter(e.target.value)}>
                    <option value="All" defaultValue>All</option>
                    <option value="BOOK">Plants</option>
                    <option value="MAGAZINE">Magazines</option>
                </select>
            </div>
            <div className="selection">
                <label htmlFor="plant-type">Plant Type: </label>
                <select id="plant-type" onChange={e => this.props.onPlantFilter(e.target.value)}>
                    <option value="All" defaultValue>All</option>
                    <option value="ePlant">ePlant</option>
                    <option value="paper">Physical Plant</option>
                </select>
            </div>
        </div>
    );
  }
}

export default Filters;