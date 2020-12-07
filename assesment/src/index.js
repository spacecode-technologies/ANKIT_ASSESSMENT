import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import App from './App';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
