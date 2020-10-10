import React from 'react';
import './App.css';
import SEO from "./components/SEO"
// import { Helmet } from "react-helmet";
import LayoutContainer from "./components/LayoutContainer"

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div>
        {/* <Helmet> */}
          <SEO />
        {/* </Helmet> */}
        <LayoutContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
