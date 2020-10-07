
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
  console.log ('layout context pre',  props.appContext.title)
  const appContext = props.appContext
  console.log ('updatedcontext',props.appContext.title )
  console.log ('layout props.titlename', props.titleName)
  alert ("Layout")

  let curTitle = titles.find(titles => titles.titleName === props.titleName);
  let artistList = artists.filter(artist => artist.titleName === props.titleName);

  // console.log(artistList)

  return (
    <div>
      <Header
        titleName={curTitle.titleName}
        cover={curTitle.cover}
        coverArt={curTitle.coverArt}
        alt={curTitle.alt}
        appContext = {appContext}
        />
      alert ('back from header')
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