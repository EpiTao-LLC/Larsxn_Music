
import React from "react"
import nav from "../content_data/nav"
import titles from "../content_data/titles"
import Layout from "../components/Layout"

const LayoutContainer = () => {

    console.log('nav.home', nav['home'])
    // let titleName = titles[0].titleName
    // let titleName = titleNameContext.title
    // const [artistsPage, setArtistsPage] = useState(false)
    console.log("in LayoutContainer")

    return (
        <div>
       <Layout
            titleName={titleNameContext.title}
            artistsPage={artistsPageContext.artistsPage}
        />
        </div>

    )
  }


  export default LayoutContainer
  export const artistsPageContext = React.createContext({
      artistPage: false,
      setArtist: () => {}})
  export const titleNameContext = React.createContext ({
      title: titles[0].titleName,
      setTitle: () => {}})
  export const titlesContext = React.createContext (titles[0])