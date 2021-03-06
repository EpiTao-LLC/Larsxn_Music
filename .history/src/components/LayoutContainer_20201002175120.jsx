
import React, {useState} from "react"
import titles from "../content_data/titles"
import Layout from "../components/Layout"

const LayoutContainer = () => {

    let titleName = titles[0].titleName
    const [artistsPage, setArtistsPage] = useState(false)

    return (
        <div>
       <Layout
            titleName={titleName}
            artistsPage={artistsPage}
        />
        </div>

    )
  }


  export default LayoutContainer
  export const titleNameContext = React.createContext (titles[0].titleName)
  export const titlesContext = React.createContext (titles[0])