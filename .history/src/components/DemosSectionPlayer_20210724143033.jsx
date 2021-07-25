import React, { createRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import trackingCall from "../utils/trackingCall"
// import stopOtherPlayers from "./DemosSectionCarouselContainer"


function stopOtherPlayers (currentPlayer) {
    currentPlayer.current.audio.current.pause()
    console.log('currentPlayer=',currentPlayer)
}

const DemosSectionPlayer = (
    {songTitle, feat, song}) => {

    const player = createRef()

    return (
        <div className="demo-player-box"  >

        <AudioPlayer  className="demo-player-style demo-player-background"
            ref={player}
            autoPlay={false}
            // layout="horizontal-reverse"
            preload='none'
            src={song}
            showSkipControls={false}
            showJumpControls={true}
            showFilledProgress={false}
            customAdditionalControls={[]}
            onPlay={() => {trackingCall("Played " + songTitle)
                 stopOtherPlayers(player)}}
            onPlayError={e => console.log("ERROR: ", e)}
        />
        <h3 className="track-title">{songTitle}</h3>
        <div className="feat">{feat}</div>
        <br></br>
        </div>
)
    }


  export default DemosSectionPlayer
