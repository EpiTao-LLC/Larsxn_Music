
import React from "react"
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


const Layout = (props) => {

  console.log ('in layout')
  console.log ('layout context', props.appContext)
  const appContext = props.appContext
  console.log ('updatedcontext',props.appContext )
  alert ("Layout")
  alert ("Layout - title,", appContext.title)

  let curTitle = titles.find(titles => titles.titleName === props.titleName);
  let artistList = artists.filter(artist => artist.titleName === 'Lie.');

  console.log(artistList)

  return (
    <div>
      <Header
        titleName={curTitle.titleName}
        cover={curTitle.cover}
        coverArt={curTitle.coverArt}
        alt={curTitle.alt}
        appContext = {appContext}
        />
      {props.artistsPage &&
          <ArtistsSectionContainer artistList={artistList} />
      }
      {!props.artistsPage &&
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