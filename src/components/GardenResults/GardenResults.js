import React, {Component} from 'react';
import SinglePlant from '../SinglePlant/SinglePlant';
import {compareValues} from '../Utils/Utils'
import '../Results/Results.css';


class GardenResults extends Component {

//Filter and sort functionality for saved garden plants
  render() {
    const {plantFilter} = this.props;
    const {property} = this.props;
    const list = this.props.plants
    .filter(plant => 
      (plantFilter === 'All' || (plant.is_indoor && plantFilter === 'Indoor Plants') || 
      (!plant.is_indoor && plantFilter === 'Outdoor Plants')))   
    .sort(compareValues(`${property}`.replace(/[^a-zA-Z ]/g, "")))
    .map((plant, key) => 
      <SinglePlant 
        {...plant} 
        onDeletePlant={this.handleDeletePlant}
        key={key}
        />);

    return (
        <ul className='plantList'>
            <li>{list}</li>
        </ul>
    );
  }
}

export default GardenResults;
