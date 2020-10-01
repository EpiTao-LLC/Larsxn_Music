import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
// import SEO from "./components/seo"
import { Helmet } from "react-helmet";
import LayoutContainer from "./components/LayoutContainer"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        {/* <SEO title="Larsxn Music"/> */}
        {/* <Helmet>
        </Helmet> */}
        <LayoutContainer />

          Edit <code>src/App.js</code> and save to reload.
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Router>
  );
}

export default App;
