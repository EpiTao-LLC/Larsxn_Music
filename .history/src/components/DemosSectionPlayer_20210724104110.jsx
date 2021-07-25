import React, { createRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import trackingCall from "../utils/trackingCall"
import stopOtherPlayers from "./DemosSectionCarouselContainer"

function refPlayer () {
    return createRef ()
}

const DemosSectionPlayer = (
    {songTitle, feat, song}
    ) => {

        return (
                <div className="demo-player-box"  >

                <AudioPlayer  className="demo-player-style demo-player-background"
                    ref={refPlayer()}
                    autoPlay={false}
                    // layout="horizontal-reverse"
                    preload='none'
                    src={song}
                    showSkipControls={false}
                    showJumpControls={true}
                    showFilledProgress={false}
                    customAdditionalControls={[]}
                    //
                onPlay={() => {
                    trackingCall("Played " + songTitle)
                    stopOtherPlayers (ref)}}
                    onPlayError={e => console.log("ERROR: ", e)}
                />
                <h3 className="track-title">{songTitle}</h3>
                <div className="feat">{feat}</div>
                <br></br>
                </div>
        )
    }


  export default DemosSectionPlayer
