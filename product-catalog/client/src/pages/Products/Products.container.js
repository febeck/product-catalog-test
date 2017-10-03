import { connect } from 'react-redux'
import Products from './Products.component'

function mapStateToProps (state) {
  return {
    items: state.product.list
  }
}

function mapDispatchToProps () {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
