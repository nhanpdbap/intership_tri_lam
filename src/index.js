import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'antd/dist/antd.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import ThemeProvider, { ThemedGlobalStyle } from './themes';
import './i18n';

const initialState = {};

export const store = configureStore(initialState);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <ThemedGlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
