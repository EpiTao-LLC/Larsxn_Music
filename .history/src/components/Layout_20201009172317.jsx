
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

  // The Layout displays the artists section if artistPage is true, or the main section
  // (message and demo sections) when artistPage is false (the default)

  const context = appContext

  const curTitle = titles.find(titles => titles.titleName === context[0].title)
  const artistList = artists.filter(artists => artists.titleName === context[0].title)

  return (

    <div>
    <ErrorBoundry>
      <Header
        titleName={curTitle.titleName}
        cover={curTitle.cover}
        coverArt={curTitle.coverArt}
        alt={curTitle.alt}
        artists={curTitle.artists}
        appContext = {appContext}
        />

      {context.artistsPage &&
        <>
          <ArtistsSectionContainer
            artistList={artistList}
            appContext={appContext} />
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
      </ErrorBoundry>
    </div>

  )
}


export default Layout