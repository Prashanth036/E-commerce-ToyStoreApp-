import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Index } from './index.jsx'
import { Provider } from 'react-redux'
import store from './reduxStore/Redux_store.js'
import { App } from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </StrictMode>,
)
