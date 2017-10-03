import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Root extends Component {
    static propTypes = {
      children: PropTypes.element,
    };
  
    render() {
      return (
          <div className="App">
            <div className="App-header">
              <h2>Welcome to Product</h2>
            </div>
            {this.props.children}
          </div>
      );
    }
  }