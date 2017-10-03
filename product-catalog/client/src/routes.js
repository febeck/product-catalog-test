import React from 'react'
import { Route } from 'react-router'
import { Products } from './pages'

const routes = (
  <div>
    <Route exact path='/' component={Products} />
  </div>
)

export default routes
