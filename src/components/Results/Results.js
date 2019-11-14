import React, {Component} from 'react';
import ApiPlant from '../ApiPlant/ApiPlant'
import './Results.css'


class Results extends Component {
  render() {
    const {printFilter, plantFilter} = this.props;
    const list = this.props.plants
    .filter(plant => (printFilter === "All" || plant.volumeInfo.printType === printFilter)
     && (plantFilter === "All" || (plant.saleInfo.isEplant && plantFilter === "ePlant") || (!plant.saleInfo.isEplant && plantFilter === "paper")))    
    .map((plant, key) => <ApiPlant {...plant} key={key}/>);

    return (
        <ul className="plantList">
            {list}
        </ul>
    );
  }
}

export default Results;
