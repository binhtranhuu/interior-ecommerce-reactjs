import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './scss/reset.scss';
import './scss/line-awesome.scss';
import 'bootstrap/scss/bootstrap.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import './scss/styles.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename={'/'}>
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
