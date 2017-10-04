import { connect } from 'react-redux'
import Products from './Products.component'
import {fetchProductsSuccess, fetchProductsFailure} from './module'

function mapStateToProps (state) {
  return {
    items: state.product.list
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchProductsSuccess: (products) => {
      dispatch(fetchProductsSuccess(products))
    },
    fetchProductsFailure: (error) => {
      dispatch(fetchProductsFailure(error))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
