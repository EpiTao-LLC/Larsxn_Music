import React, { useState } from 'react';
import './App.css';
import SEO from "./components/SEO.jsx"
import titles from "./content_data/titles"
import Layout from "./components/Layout"
import ErrorBoundry from "./components/ErrorBoundary"

function App() {

  // Set the context for the app.  The first item in the titles array is the newest work
  // that will display on the header page.  The main sections (artist message and demos)
  // will display below the header as artistsPage is set to false (default).  When artistPage
  // is true the Layout will display the artists who's work is featured.

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
