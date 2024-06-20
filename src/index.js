import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Css/Login.css"
import store from './store';
import { Provider } from 'react-redux';
// import "./Css/Login.css"
// import "./App.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={(store)}>
            <App/>
      </Provider>
     
);    