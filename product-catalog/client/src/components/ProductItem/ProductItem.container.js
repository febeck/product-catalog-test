import { connect } from 'react-redux'
import ProductItem from './ProductItem.component'
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  navigateProductDetail (sku) {
    dispatch(push(`/${sku}`))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem)
