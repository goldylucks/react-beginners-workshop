import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// import App from './Auth'
import App from './Coin'

const render = AppComponent =>
  ReactDOM.render( // eslint-disable-line react/no-render-return-value
    <AppContainer>
      <AppComponent />
    </AppContainer>,
    document.querySelector('#root'),
  )

render(App)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Auth', () => {
    const NextApp = require('./Auth').default // eslint-disable-line global-require
    render(NextApp)
  })
}
