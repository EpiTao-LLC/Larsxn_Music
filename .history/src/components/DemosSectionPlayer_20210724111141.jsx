import React, { createRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import trackingCall from "../utils/trackingCall"
import stopOtherPlayers from "./DemosSectionCarouselContainer"

function refPlayer () {
    let x = createRef()
    console.log ('x=', x)
    return x
}

const DemosSectionPlayer = (
    {songTitle, feat, song}
    let x = createRef()
    ) => {

        return (
                <div className="demo-player-box"  >

                <AudioPlayer  className="demo-player-style demo-player-background"
                    ref={refPlayer()}
                    autoPlay={false}
                    preload='none'
                    src={song}
                    showSkipControls={false}
                    showJumpControls={true}
                    showFilledProgress={false}
                    customAdditionalControls={[]}
                    //
                    onPlay={() => {
                        trackingCall("Played " + songTitle)
                        stopOtherPlayers ()}}
                    onPlayError={e => console.log("ERROR: ", e)}
                />
                <h3 className="track-title">{songTitle}</h3>
                <div className="feat">{feat}</div>
                <br></br>
                </div>
        )
    }


  export default DemosSectionPlayer
