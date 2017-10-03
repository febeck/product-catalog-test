import React from 'react'
import { Route } from 'react-router'
import { Products, ProductDetail } from './pages'

const routes = (
  <div>
    <Route exact path='/' component={Products} />
    <Route exact path='/:id' component={ProductDetail} />
  </div>
)

export default routes
