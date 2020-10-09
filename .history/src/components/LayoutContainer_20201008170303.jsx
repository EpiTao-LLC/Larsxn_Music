
import React, { useState } from "react"
import titles from "../content_data/titles"
import Layout from "../components/Layout"
import ErrorBoundry from "./ErrorBoundary"


const LayoutContainer = (props) => {

    const [context, setContext ] = useState({
        title: titles[0].titleName,
        artistsPage: false
    })

    console.log("in LayoutContainer")
    console.log("context.title", context.title)
    console.log("context.art", context.artistsPage)
    alert("layout container")

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

  export const titleNameContext = React.createContext ({
      title: titles[0].titleName,
      setTitle: (val) => {titleNameContext.title = val}})

  export const titlesContext = React.createContext (titles[0])