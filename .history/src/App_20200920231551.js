import React from 'react';
import logo from './logo.svg';
import './App.css';
import SEO from "./components/seo"
import { Helmet } from "react-helmet";
import LayoutContainer from "./components/LayoutContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* <SEO title="Larsxn Music"/> */}
        <Helmet>
        </Helmet>
        <LayoutContainer />

          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  );
}

export default App;
