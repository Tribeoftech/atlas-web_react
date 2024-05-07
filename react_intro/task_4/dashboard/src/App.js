import React from "react";
import holberton_logo from "./holberton_logo.jpg";
import './App.css';
import { getFullYear, getFooterCopy } from './utils'

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} alt="Holberton Logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="fname">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="lname">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
