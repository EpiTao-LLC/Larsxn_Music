
import React from "react"
import Header from "./Header"
import ArtistSectionContainer from "./ArtistsSectionContainer"
import ChannelsSectionContainer from "./ChannelsSectionContainer"
import Footer from "./Footer"


const ArtistsLayout = ({titleName, cover, coverArt, alt, artistList }) => {

  //artistCall flag added to supress navigation buttons on Header duet Gatsby Link issue
  let artistCall = true;

  return (
    <>
      <Header titleName={titleName} cover={cover} coverArt={coverArt} alt={alt} artistCall={artistCall}/>
      <ArtistSectionContainer artistList = {artistList}/>
      <ChannelsSectionContainer />
      <Footer />
    </>
  )
}


export default ArtistsLayout