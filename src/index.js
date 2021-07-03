import React from 'react';
import ReactDOM from 'react-dom';
import SettingsContext from './components/todo/settings-context'
import App from './App.js';

import  AuthContext  from './components/todo/auth-context';
import { BrowserRouter } from "react-router-dom";

 function  Main () {

    return(
      <BrowserRouter>
      <AuthContext>
        <SettingsContext>
          <App />
        </SettingsContext>
      </AuthContext>
      </BrowserRouter>
      );

}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement)
