/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import App from './App'
import { theme } from './theme'
ReactDOM.render(
<>  
    <CssBaseline />

    <App />
  </>,
  document.getElementById('root'),
)
