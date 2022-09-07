import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; //Importent: to solve multiple Router component occur in same app.
import './index.css';
import Login from './Login/Login';
// import Signin from './Login/loginJs/signIn';
// import Forgetpw from './Login/loginJs/forgetPw';
// import Signup from './Login/loginJs/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Login />
    </Router>
    {/* <Signin />
    <Forgetpw />
    <Signup /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
