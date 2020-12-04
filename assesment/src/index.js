import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


