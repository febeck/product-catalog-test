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
  }

  getSizeStock = (size) => {
    let url = `http://localhost:3050/api/stocks?filter[where][and][0][sku]=${this.props.item.sku}&filter[where][and][1][size]=${size}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      response.length
      ? alert(`There are ${response[0].quantity} units of product ${this.props.item.name} at warehouse ${response[0].warehouse}`)
      : alert('This product is not listed in our stock...')
    })
    .catch(e => {
      alert("There's a problem with our server...")
    })
  }

   render () {
    const {item} = this.props
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>{`Detail of product of ${item.name}`}</h2>
          {item.size.map(size => <h4 key={size} onClick={() => this.getSizeStock(size)}>{size}</h4>)}
        </div>
      </div>
    )
  }
}
