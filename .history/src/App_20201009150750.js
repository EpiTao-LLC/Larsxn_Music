import React from 'react';
import './App.css';
import SEO from "./components/SEO"
import LayoutContainer from "./components/LayoutContainer"

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <SEO />
          <LayoutContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
