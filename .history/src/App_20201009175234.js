import React, { useState } from 'react';
import './App.css';
import SEO from "./components/SEO"
import titles from "../content_data/titles"
import Layout from "./components/Layout"
import ErrorBoundry from "./components/ErrorBoundary"

function App() {

  const [context, setContext ] = useState({
    title: titles[0].titleName,
    artistsPage: false
  })

  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundry>
          <div>
            <SEO />
            <Layout
              appContext= {[context, setContext]}
            />
           </div>
        </ErrorBoundry>
      </header>
    </div>
  );
}

export default App;
