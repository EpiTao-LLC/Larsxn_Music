
import React from "react"
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
import ErrorBoundry from "./ErrorBoundary"


const Layout = ({appContext}) => {

  const [context, setContext] = appContext

  console.log ('in layout')
  console.log ('layout context title',  context.title)
  console.log ('layout context artistsPage', context.artistsPage)

  const curTitle = titles.find(titles => titles.titleName === context.title)
  const artistList = artists.filter(artists => artists.titleName === context.title)

  alert ("Layout")

  return (

    <div>
    <ErrorBoundry>
      <Header
        titleName={curTitle.titleName}
        cover={curTitle.cover}
        coverArt={curTitle.coverArt}
        alt={curTitle.alt}
        appContext = {appContext}
        />

      {context.artistsPage &&
        <>
          <ArtistsSectionContainer artistList={artistList} />
        </>
      }
      {!context.artistsPage &&
        <>
          <MessageSectionContainer />
          <DemosSectionCarouselContainer
            title={curTitle.titleName}
            appContext={appContext}
            />
        </>
      }
      <>
      <ChannelsSectionContainer />
      <Footer />
      </>
      {e.preventDefault()}
      </ErrorBoundry>
    </div>

  )
}


export default Layout