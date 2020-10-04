
import React from "react"
import titles from "../content_data/titles"
import Layout from "../components/Layout"

const LayoutContainer = () => {

    let titleName = titles[0].titleName

    return (
        <div>
       <Layout
            titleName={titleName}
            artistsPage={false}
        />
        </div>

    )
  }


  export default LayoutContainer
