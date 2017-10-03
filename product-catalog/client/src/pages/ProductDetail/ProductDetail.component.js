import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProductDetail extends Component {
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

  render () {
    const {item} = this.props
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>{`Welcome to Product of ${item.name}`}</h2>
        </div>
      </div>
    )
  }
  }
