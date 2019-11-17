import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Input, Required} from '../Utils/Utils';
import './SignUpForm.css';

export default class SignUpForm extends Component {

  render() {
    return (
      <form
        className='SignUpForm'
        onSubmit={this.handleSubmit}
      >
          <div className='first_name'>
            <label htmlFor='SignUpForm_first_name'>
              First name <Required />
            </label>
            <Input
              name='first_name'
              type='text'
              required
              id='SignUpForm_first_name'>
            </Input>
          </div>
          <div className='last_name'>
            <label htmlFor='SignUpForm_last_name'>
              Last Name <Required />
            </label>
            <Input
              name='last_name'
              type='text'
              required
              id='SignUpForm_last_name'>
            </Input>
          </div>
          <div className='username'>
            <label htmlFor='SignUpForm_username'>
              Username <Required />
            </label>
            <Input
              name='username'
              type='text'
              required
              id='SignUpForm_username'>
            </Input>
          </div>
          <div className='password'>
            <label htmlFor='SignUpForm_password'>
              Password <Required />
            </label>
            <Input
              name='password'
              type='password'
              required
              id='SignUpForm_password'>
            </Input>
          </div>
          <Link className='SignUpForm_Submit' to='/add-plant'>
            Sign Up
          </Link>
      </form>
    )
  }
}