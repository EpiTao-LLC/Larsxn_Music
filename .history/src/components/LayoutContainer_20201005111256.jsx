
import React from "react"
import titles from "../content_data/titles"
import Layout from "../components/Layout"

const LayoutContainer = () => {

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
      setTitle: (val) => {title: val}})
export function titleNameContextProvider (props) {
    const [title, SetTitle] = titleNameContext.title
    return (
        <titleNameContext.roider value={{title, SetTitle}}>
            {props.children}
        </titleNameContext.roider>
    )
}
  export const titlesContext = React.createContext (titles[0])