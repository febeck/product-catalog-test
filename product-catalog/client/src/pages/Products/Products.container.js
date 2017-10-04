import { connect } from 'react-redux'
import Products from './Products.component'
import {fetchProductsSuccess} from './module'

function mapStateToProps (state) {
  return {
    items: state.product.list
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchProductsSuccess: (products) => {
      dispatch(fetchProductsSuccess(products))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
