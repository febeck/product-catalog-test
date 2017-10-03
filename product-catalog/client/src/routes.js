import React from 'react'
import { Route } from 'react-router'
import { Products } from './pages'

const routes = (
  <div>
    <Route exact path='/' component={Products} />
    <Route exact path='/:id' render={({match}) => <h1>{match.params.id}</h1>} />
  </div>
)

export default routes
