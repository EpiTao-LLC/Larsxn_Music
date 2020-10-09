
import React from "react"
import ArtistsSection from "./ArtistsSection"
import "./ArtistsSection.css"
import trackingCall from "../utils/trackingCall"
import ErrorBoundry from "./ErrorBoundary"


function createArtist (artist) {

    return (
        <ErrorBoundry>
        <ArtistsSection key={index}
            key = {index}
            aName = {artist.name}
            picture = {artist.picture}
            alt={artist.alt}
            tag = {artist.tag}
            siteLogo = {artist.siteLogo}
            href = {artist.href}
            work = {artist.work}
            finalComment = {artist.finalComment}
        />
        </ErrorBoundry>
    )
}

const ArtistsSectionContainer = ({artistList}) => {
    console.log("in ArtistsSectionContainer");
    console.log("artistList", artistList)
    alert ("in ArtistSectionContainer")
        return (
            <ErrorBoundry>
            <section id="artists" >
            <div className="artists-section" style={{margin: "auto"}}>
            <h2 id="artists-title">Artists and Collaborators</h2>

                <div className="artist-container">

                    <div >
                        {artistList.map(createArtist(index)}
                    </div>
                    <div className='home-link'>
                        <a href = "/#title"
                            onClick={() => {trackingCall("Home")}}
                            className='home-link'
                         >Home</a>
                    </div>
                </div>

            </div>

            </section>
            </ErrorBoundry>
        )
    // } else {
    //     // a way to statisfy static page build requirements.  The test above will always be true.
    //     return (<div><h1>ERROR:  ArtistsSectionContainer Failed to Render</h1></div>)
    // }
}

export default ArtistsSectionContainer;