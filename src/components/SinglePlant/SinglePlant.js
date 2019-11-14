import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './SinglePlant.css'

class SinglePlant extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  constructor(props){
    super(props);
    this.state = {
      borrowed: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      borrowed: !prevState.borrowed
    }));
  }

  render() {

    let {name, author, description, rating} = this.props
      if (this.props.author) {
        author = this.props.author;
      }
      else (
        author = "No authors listed"
      )

      if (this.props.description) {
        description = this.props.description;
      }
      else (
        description = "No description included for this plant."
      )

      const {gardenId} = this.props
    
      return (
          <div className = 'single-plant'>
            <ul>
              <h3>{name}</h3>
              <h4>{author}</h4>
              <p>{description}</p>
              <p>{rating} &#9733;</p>
              <button onClick={this.handleClick}>Mark Plant as {this.state.borrowed ? 'Borrowed' : 'Returned'}</button>
              <div className='buttons'>
              <Link
                to={`/garden/${gardenId}/add-note`}
                type='button'
                className='Add-note-button'
              >
              <br />
                Add a note to this plant
              </Link>
              <Link
                to={`/notes/${gardenId}`}
                type='button'
                className='View-notes-button'
              >
              <br />
                View notes for this plant
              </Link>
            </div>
          </ul>
        </div>
      );
  }
}

export default SinglePlant;