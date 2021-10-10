import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalProvider } from 'context/GlobalContext'
import { Providers } from 'Providers'
import App from './App'

import 'react-toastify/dist/ReactToastify.min.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Providers>
        <App />
      </Providers>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
