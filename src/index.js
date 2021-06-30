import React from 'react';
import ReactDOM from 'react-dom';
import SettingsContext from './components/todo/settings-context'
import App from './App.js';

 function  Main () {

    return(
    <SettingsContext>
        <App />
      </SettingsContext>
      );

}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement)