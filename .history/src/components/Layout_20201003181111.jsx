
import React, { useContext} from "react"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch
// } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import MessageSectionContainer from "./MessageSectionContainer"
import ArtistsSectionContainer from "./ArtistsSectionContainer"
import DemosSectionCarouselContainer from "./DemosSectionCarouselContainer"
import ChannelsSectionContainer from "./ChannelsSectionContainer"
import Footer from "./Footer"
import "./Layout.css"
import titles from "../content_data/titles"
import artists from "../content_data/artists"
import { artistsPageContext, titleNameContext } from "./LayoutContainer"


const Layout = () => {

  console.log ('in layout')
  let titleContext = useContext(titleNameContext)

  titleNameContext.Provider.currentValue = "Away"
  let x = titleNameContext.Provider.currentValue
  let artistContext = useContext(artistsPageContext)
  console.log (titleNameContext)
  console.log (x)

  let curTitle = titles.find(titles => titles.titleName === titleContext.title);
  let artistList = artists.filter(artist => artist.titleName === titleContext.title);

  console.log(artistList)

  return (
    <div>
      <Header titleName={curTitle.titleName} cover={curTitle.cover} coverArt={curTitle.coverArt} alt={curTitle.alt}/>
      {artistContext.artistsPage &&
          <ArtistsSectionContainer artistList={artistList} />
      }
      {!artistContext.artistsPage &&
        <>
          <MessageSectionContainer />
          <DemosSectionCarouselContainer title={curTitle.titleName} />
        </>
      }
      <ChannelsSectionContainer />
      <Footer />
    </div>
  )
}


export default Layout