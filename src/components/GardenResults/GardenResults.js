import React, {Component} from 'react';
import SinglePlant from '../SinglePlant/SinglePlant';
import TendOrder from '../TendOrder/TendOrder'
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
        const orders = this.props.orders.map(order =>
                <TendOrder
                  key={order.maintenance_needed + 'key'}
                  maintenance_needed={order.maintenance_needed}
                  frequency={order.frequency}
                  details={order.details}
                  onDeleteOrder={this.handleDeleteOrder}
                  {...order}
                />
              )

    return (
        <ul className='plantList'>
            <li>{list}</li>
            <li>{orders}</li>
        </ul>
    );
  }
}

export default GardenResults;
