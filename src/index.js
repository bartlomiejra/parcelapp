import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider } from '@mui/material/styles';
import {theme} from './theme.js';
import { CssBaseline } from '@mui/material';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

  <App />
  </ThemeProvider>,
  document.getElementById('root')
);
