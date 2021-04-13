import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

