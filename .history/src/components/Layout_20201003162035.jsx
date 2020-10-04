
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


const Layout = (props) => {

  let x = useContext(titleNameContext)
  console.log(x)
  let y = useContext(artistsPageContext)
  //defaulting to context information if parms aren't supplied in call.  For future use.
  // console.log('in Layout')
  // console.log(' artists', props.artistsPage)
  // console.log('title', props.titleName)
  let title=props.title
  let artistsPage=props.artistsPage
  // if(props.titleName) {
  //   titleName = props.title;
  // } else if (props.location.title) {
  //   const {title} = props.location.title;
  //   const {artistPage} = props.location.artistPage;
  //   console.log ("in Layout - title ", title);
  //   console.log ("in Layout - artistPage ", artistPage)
  // } else {
  //   console.log("nothing recieved")
  // }

  // let curTitle = titles.find(titles => titles.titleName === props.titleName);
  let curTitle = titles.find(titles => titles.titleName === title);
  // let artistList = artists.filter(artist => artist.titleName === props.titleName);
  let artistList = artists.filter(artist => artist.titleName === title);
  console.log(artistList)

  return (
    <div>
      <Header titleName={curTitle.titleName} cover={curTitle.cover} coverArt={curTitle.coverArt} alt={curTitle.alt}/>
      {artistsPage &&
          <ArtistsSectionContainer artistList={artistList} />
      }
      {!artistsPage &&
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