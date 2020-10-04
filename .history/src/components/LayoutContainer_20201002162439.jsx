
import React from "react"
import titles from "../content_data/titles"
import Layout from "../components/Layout"

const LayoutContainer = () => {

    let titleName = React.useContext(titleNameContext)

    return (
        <div>
       <Layout
            titleName={titleName}
            artistsPage={true}
        />
        </div>

    )
  }


  export default LayoutContainer
  export const titleNameContext = React.createContext (titles[0].titleName)
  export const titlesContext = React.createContext (titles[0])