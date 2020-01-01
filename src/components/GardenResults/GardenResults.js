import React, {Component} from 'react';
import SinglePlant from '../SinglePlant/SinglePlant';
import {compareValues} from '../Utils/Utils'
import '../GardenResults/GardenResults.css';


class GardenResults extends Component {

//Filter and sort functionality for saved garden plants
  render() {
    const {property} = this.props;
    const list = this.props.plants
    .sort(compareValues(`${property}`))
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
