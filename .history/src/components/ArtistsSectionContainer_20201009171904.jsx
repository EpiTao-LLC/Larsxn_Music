
import React from "react"
import ArtistsSection from "./ArtistsSection"
import "./ArtistsSection.css"
import trackingCall from "../utils/trackingCall"
import updateState from "../utils/updateState"

function createArtist (artist) {

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

const ArtistsSectionContainer = ({artistList, appContext}) => {

        return (
            <section id="artists" >
            <div className="artists-section" style={{margin: "auto"}}>
                <h2 id="artists-title">Artists and Collaborators</h2>
                <div className="artist-container">
                    <div >
                        {artistList.map(createArtist)}
                    </div>
                    <div className='home-link'>
                        <a href = "/Layout#title"
                            onClick={() => {
                                trackingCall("Home")
                                updateState ('home', false, appContext)}}
                            className='home-link'
                         >Home</a>
                    </div>
                </div>
            </div>
            </section>
        )
    }

export default ArtistsSectionContainer;