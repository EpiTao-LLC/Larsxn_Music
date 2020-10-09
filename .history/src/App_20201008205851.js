import React from 'react';
import './App.css';
// import SEO from "./components/seo"
import { Helmet } from "react-helmet";
import LayoutContainer from "./components/LayoutContainer"

function App() {
  return (
    // <Router>
    <div className="App">
      <header className="App-header">

        <div>
        {/* <SEO title="Larsxn Music"/> */}
        {/* <Helmet>
        </Helmet> */}
        <LayoutContainer />
        </div>

      </header>
    </div>
    // </Router>
  );
}

export default App;
