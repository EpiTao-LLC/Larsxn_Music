
import React, { useState } from "react"
import titles from "../content_data/titles"
import Layout from "../components/Layout"
import ErrorBoundry from "./ErrorBoundary"

const LayoutContainer = () => {

    const [context, setContext ] = useState({
        title: titles[0].titleName,
        artistsPage: false
     })

    function updateState (title, artistsPage) {
    if (title === 'home') {
        title = titles[0].titleName
        artistsPage = false
    }
    setContext({title: title, artistsPage: artistsPage})
    return [context.title, context.artistsPage]
    }

    console.log("in LayoutContainer")
    console.log("context.title", context.title)
    console.log("context.art", context.artistsPage)

    return (
        <ErrorBoundry>
        <div>
       <Layout
            appContext= {[context, setContext]}
        />
        </div>
        </ErrorBoundry>

    )
  }


  export default LayoutContainer
  export function updateState ()