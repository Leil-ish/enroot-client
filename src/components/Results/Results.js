import React, {Component} from 'react';
import ApiPlant from '../ApiPlant/ApiPlant';
import './Results.css';


class Results extends Component {

  //Handle filtering for results from Google Plants API
  render() {
    const list = this.props.plants.map((plant, key) => <ApiPlant {...plant} key={key}/>);

    return (
        <ul className="plantList">
            {list}
        </ul>
    );
  }
}

export default Results;
