
import React from "react"
import titles from "../content_data/titles"
import artists from "../content_data/artists"
import ArtistsLayout from "../components/ArtistsLayout"
import { titleNameContext, titlesContext } from "./LayoutContainer"

const ArtistLayoutContainer = ({location}) => {

    // defaults to satisfy static build process

        let titleName = React.useContext(titleNameContext)
        let title = React.useContext(titlesContext);
        let artistList = artists.filter(artist => artist.titleName === titleName);

    // conditional to allow for dynamic rendering

    if (location.state) {
        title = titles.find(titles => titles.titleName === location.state.titleName);
        artistList = artists.filter(artist => artist.titleName === title.titleName);
    }

    return (

       <ArtistsLayout
            titleName={title.titleName}
            cover={title.artists}
            coverArt={title.coverArt}
            alt={title.alt}
            artistList={artistList}
        />

    )
  }

  export default ArtistLayoutContainer

