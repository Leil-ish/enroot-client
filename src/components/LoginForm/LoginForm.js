import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Input} from '../Utils/Utils';
import './LoginForm.css';

export default class LoginForm extends Component {

  render() {
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
        </div>
        <div className='username'>
          <label htmlFor='LoginForm_username'>
            Username
          </label>
          <Input
            required
            name='username'
            id='Login_username'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm_password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='Login_password'>
          </Input>
        </div>
        <Link className='LoginForm_Submit' to='/garden'>
          Login
        </Link>
      </form>
    )
  }
}