import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import App from './App';
import { AppProvider } from 'AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d1cd9f',
    },
    secondary: {
      main: '#FF717C',
    },
    tertiary: {
      main: '#7338D2',
    }
  }
});
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <AppProvider>
        <MuiThemeProvider theme={theme}>

          <App />
        </MuiThemeProvider>
      </AppProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
