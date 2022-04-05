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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
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
