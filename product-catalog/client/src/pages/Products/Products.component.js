import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ProductItem} from '../../components'

export default class Products extends Component {
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

    componentWillMount() {
      fetch('http://localhost:3030/api/products')
      .then(response => response.json())
      .then(response => {
        this.props.fetchProductsSuccess(response)
      })
      .catch(e => {
        this.props.fetchProductsFailure(e)
      })
    }
  
    render() {
      const {items} = this.props
      return (
          <div className="App">
            <div className="App-header">
              <h2>Welcome to Product</h2>
            </div>
            {items.length === 0 &&
              <span>There are no products on the catalog...</span>
            }
            {items.map(item => <ProductItem key={item.sku} item={item} />)}
          </div>
      );
    }
  }