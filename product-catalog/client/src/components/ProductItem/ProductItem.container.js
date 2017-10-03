import { connect } from 'react-redux'
import ProductItem from './ProductItem.component'
import { push } from 'react-router-redux'
import { selectItem } from '../../pages/Products/module'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  navigateProductDetail (sku) {
    dispatch(selectItem(sku))
    dispatch(push(`/${sku}`))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem)
