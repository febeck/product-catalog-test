import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ProductItem} from '../../components'

export default class Root extends Component {
    static propTypes = {
      items: PropTypes.arrayOf(PropTypes.shape({
        sku: PropTypes.string,
        price: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        size: PropTypes.any,
        brand: PropTypes.string,
        categories: PropTypes.any,
        product_image_url: PropTypes.string,
        special_price: PropTypes.number,
      })),
    };
  
    render() {
      const {items} = this.props
      return (
          <div className="App">
            <div className="App-header">
              <h2>Welcome to Product</h2>
            </div>
            {items.map(item => <ProductItem key={item.sku} item={item} />)}
          </div>
      );
    }
  }