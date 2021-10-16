import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import Airport from './pages/Airport';
//import { useHistory } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



/*

const loginButton = document.getElementById('login-form-login');
const loginForm = document.getElementById('login-form');
loginButton.addEventListener("click", (run) => {
  run.preventDefault();
  const username = loginForm.userfield.value;
  const password = loginForm.passwordfield.value;

  if (username === "admin" && password === "admin1995"){
    alert("You are successfully logged in. ");
  }
  else{
    alert("Sorry...Try again!!!");
  }

})
*/

reportWebVitals();

