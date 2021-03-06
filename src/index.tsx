import { App } from 'App'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import { ThemeProvider } from 'styled-components'
import './fonts.css'
import * as serviceWorker from './serviceWorker'
import * as themes from './themes'
import initializeIcons from './initializeIcons'

initializeIcons()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themes.light}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
