
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './i18n';
import { BrowserRouter } from 'react-router-dom'
import GlobalProvider from "./Context/Glopalcontext" 

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <GlobalProvider>
        <App />
        </GlobalProvider>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

