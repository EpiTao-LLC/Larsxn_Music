
import React, { useState } from "react"
import titles from "../content_data/titles"
import Layout from "../components/Layout"

const LayoutContainer = () => {

    const [context, setContext ] = useState({
        title: titles[0].titleName,
        artistsPage: false
    })


    // let titleName = titles[0].titleName
    // let titleName = titleNameContext.title
    // const [artistsPage, setArtistsPage] = useState(false)
    console.log("in LayoutContainer")
    console.log("context.title", context.title)

    return (
        <div>
       <Layout
            // titleName={titleNameContext.title}
            titleName = {context.title}
            artistsPage = {context.artistsPage}
            artistsPage={context.artistsPage}
            appContext= {[context, setContext]}
        />
        </div>

    )
  }


  export default LayoutContainer



//   export function setContext (title, artistsPage) {
//       const [ context, sContext] = useState({
//         title: titles[0].titleName,
//         artistsPage: false
//     })
//         sContext (title, artistsPage)
//         return {title, artistsPage}
//   }

//   export function setContext (title, artistsPage) {
//           return ({
//             title: title,
//             artistPage: artistsPage
//         })
//   }

  export const artistsPageContext = React.createContext({
      artistPage: false,
      setArtist: () => {}})
  export const titleNameContext = React.createContext ({
      title: titles[0].titleName,
      setTitle: (val) => {titleNameContext.title = val}})
//   export function titleNameContextProvider (props) {
//     const [title, setTitle] = titleNameContext.title
//     return (
//         <titleNameContext.Provider value={{title, setTitle}}>
//             {props.children}
//         </titleNameContext.Provider>
//     )
// }
  export const titlesContext = React.createContext (titles[0])