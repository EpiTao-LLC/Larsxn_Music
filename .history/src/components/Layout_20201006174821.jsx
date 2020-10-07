
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

  let curTitle = []
  let artistList = []
  console.log ('in layout')
  console.log ("props.titleName", props.titleName)
  console.log ('layout context pre',  props.appContext.title)
  // const appContext = props.appContext
  console.log ('updatedcontext',props.appContext.title )
  console.log ('layout props.titlename', props.titleName)
  console.log ('layout props.artistsPage', props.artistsPage)
  console.log (artists)

  curTitle = titles.find(titles => titles.titleName === props.titleName);
  artistList = artists.filter(artist => artist.titleName === props.titleName);

  console.log(artistList)
  alert ("Layout")

  return (
    <div>
      <Header
        titleName={curTitle.titleName}
        cover={curTitle.cover}
        coverArt={curTitle.coverArt}
        alt={curTitle.alt}
        appContext = {props.appContext}
        />
      {/* {props.artistsPage && */}
          <ArtistsSectionContainer artistList={artistList} />
      {/* } */}
      {/* {!props.artistsPage &&
        <>
          <MessageSectionContainer />
          <DemosSectionCarouselContainer title={curTitle.titleName} />
        </>
      } */}
      <ChannelsSectionContainer />
      <Footer />
    </div>
  )
}


export default Layout