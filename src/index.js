import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './js/store'
import { MuiThemeProvider } from '@material-ui/core'
import muiTheme from '../src/js/containers/MaterialTheme'

import { I18nContextProvider } from './js/containers/i18n'

ReactDOM.render(
  <Provider store={store}>
          <MuiThemeProvider theme={muiTheme}>

     <I18nContextProvider>
            <App />
          </I18nContextProvider>
          </MuiThemeProvider>

  </Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
