
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import MessageSectionContainer from "./MessageSectionContainer"
import DemosSectionCarouselContainer from "./DemosSectionCarouselContainer"
import ChannelsSectionContainer from "./ChannelsSectionContainer"
import Footer from "./Footer"
import "./Layout.css"
import titles from "../content_data/titles"
import { titleNameContext } from "./LayoutContainer"


const Layout = ({ title }) => {

  //defaulting to context information if parms aren't supplied in call.  For future use.

  let titleName = React.useContext(titleNameContext)

  if(title) {
    titleName = title;
  }

  let curTitle = titles.find(titles => titles.titleName === titleName);

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