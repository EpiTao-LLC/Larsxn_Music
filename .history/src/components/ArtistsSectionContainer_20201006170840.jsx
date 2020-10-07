
import React from "react"
// import { Link } from "react-router-dom"
import ArtistsSection from "./ArtistsSection"
import "./ArtistsSection.css"
import trackingCall from "../utils/trackingCall"


function createArtist (artist) {
    alert ('in create artists')
    return (

        <ArtistsSection
            key = {artist.id}
            aName = {artist.name}
            picture = {artist.picture}
            alt={artist.alt}
            tag = {artist.tag}
            siteLogo = {artist.siteLogo}
            href = {artist.href}
            work = {artist.work}
            finalComment = {artist.finalComment}
        />

    )
}

const ArtistsSectionContainer = ({artistList}) => {
    console.log("in ArtistsSectionContainer");
    console.log("artistList", artistList)
    alert ("in ArtistSectionContainer")
    if(Array.isArray(artistList)) {
        return (
            <section id="artists" >
            <div className="artists-section" style={{margin: "auto"}}>
            <h2 id="artists-title">Artists and Collaborators</h2>

                <div className="artist-container">

                    <div >
                        {artistList.map(createArtist)}
                    </div>
                    <div className='home-link'>
                        <a href to = "/#title"
                            onClick={() => {trackingCall("Home")}}
                            className='home-link'
                            activeClassName="active" >Home</a>
                    </div>
                </div>

            </div>

            </section>
        )
    } else {
        // a way to statisfy static page build requirements.  The test above will always be true.
        return (<div><h1>ERROR:  ArtistsSectionContainer Failed to Render</h1></div>)
    }
}

export default ArtistsSectionContainer;