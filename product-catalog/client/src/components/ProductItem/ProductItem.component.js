import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
        sku: PropTypes.string,
        price: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        size: PropTypes.any,
        brand: PropTypes.string,
        categories: PropTypes.any,
        product_image_url: PropTypes.string,
        special_price: PropTypes.number,
    })
  };

  render() {
    const {item} = this.props
    return (
      <div>
        {`The sku of the product is: ${item.sku}`}}
      </div>
    );
  }
}