import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './modules/store'

const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)

const rootEl = document.getElementById('root')

ReactDOM.render(<App store={store} history={history} />, rootEl)
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line
    ReactDOM.render(
      <NextApp store={store} history={history} />,
      rootEl
    )
  })
}
