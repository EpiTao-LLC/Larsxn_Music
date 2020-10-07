
import React, { useState } from "react"
import titles from "../content_data/titles"
import Layout from "../components/Layout"


const LayoutContainer = (props) => {

    const [context, setContext ] = useState({
        title: titles[0].titleName,
        artistsPage: false
    })

    console.log("in LayoutContainer")
    console.log("context.title", context.title)

    return (
        <div>
       <Layout
            // titleName={titleNameContext.title}
            titleName = {context.title}
            artistsPage = {context.artistsPage}
            appContext= {[context, setContext]}
        />
        </div>

    )
  }


  export default LayoutContainer

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