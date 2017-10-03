import { connect } from 'react-redux'
import ProductDetail from './ProductDetail.component'
import filter from 'lodash/filter'

function mapStateToProps (state) {
  return {
    item: filter(state.product.list, {sku: state.product.selectedItem})[0]
  }
}

function mapDispatchToProps () {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)
