
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
import DemosSectionCarouselContainer from "./DemosSectionCarouselContainer"
import ChannelsSectionContainer from "./ChannelsSectionContainer"
import Footer from "./Footer"
import "./Layout.css"
import titles from "../content_data/titles"
import { titleNameContext } from "./LayoutContainer"


const Layout = (props) => {

  //defaulting to context information if parms aren't supplied in call.  For future use.

  let titleName = React.useContext(titleNameContext);

  if(props.title) {
    titleName = props.title;
  } else if (props.location.title) {
    const {title} = props.location.title;
    const {artistPage} = props.location.artistPage;
    console.log ("in Layout - title ", title);
    console.log ("in Layout - artistPage ", artistPage)
  } else {
    console.log("nothing recieved")
  }

  let curTitle = titles.find(titles => titles.titleName === titleName);
  let artistList = artists.filter(artist => artist.titleName === titleName);

  return (
    <div>
      <Header titleName={curTitle.titleName} cover={curTitle.cover} coverArt={curTitle.coverArt} alt={curTitle.alt}/>
      <MessageSectionContainer />
      <DemosSectionCarouselContainer title={curTitle.titleName} />
      <ChannelsSectionContainer />
      <Footer />
    </div>
  )
}


export default Layout