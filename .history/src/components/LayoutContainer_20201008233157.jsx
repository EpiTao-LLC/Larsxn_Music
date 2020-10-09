
import React, { useState } from "react"
import titles from "../content_data/titles"
import Layout from "../components/Layout"
import ErrorBoundry from "./ErrorBoundary"

const LayoutContainer = () => {

    const [context, setContext ] = useState({
        title: titles[0].titleName,
        artistsPage: false
     })

    console.log('initialize post set', initializeState )

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
