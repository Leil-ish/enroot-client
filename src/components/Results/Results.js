import React, {Component} from 'react';
import './Results.css'


class Results extends Component {
  render() {
    return (
        <ul className="plantList">
            {this.props.plants}
        </ul>
    );
  }
}

export default Results;
