import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

export default class Root extends Component {
    static propTypes = {
      children: PropTypes.element,
    };
  
    render() {
      return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            {this.props.children}
          </div>
      );
    }
  }