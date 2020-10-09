
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


const Layout = (props) => {

  let curTitle = []
  let artistList = []

  const [context, setContext] = props.appContext

  console.log ('in layout')
  console.log ("props.titleName", props.titleName)
  console.log ('layout context state',  context.title)
  console.log ('layout context artistsPage', context.artistsPage)
  console.log ('layout props.titlename', props.titleName)
  console.log ('layout props.artistsPage', props.artistsPage)
  console.log ('artists array', artists)

  curTitle = titles.find(titles => titles.titleName === context.title)
  artistList = artists.filter(artist => artist.titleName === props.titleName)

  console.log ('curTitle', curTitle)
  console.log('artistList', artistList)
  alert ("Layout")
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }

  return (
    <div>
      <Header
        titleName={curTitle.titleName}
        cover={curTitle.cover}
        coverArt={curTitle.coverArt}
        alt={curTitle.alt}
        appContext = {props.appContext}
        />
      <ErrorBoundry>
      <div>
      {/* {props.artistsPage && */}
          <ArtistsSectionContainer artistList={artistList} />
      </div>
      </ErrorBoundry>
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