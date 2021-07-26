
import React, { useState,createRef } from "react"
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import titles from "../content_data/titles"
import songs from "../content_data/songs"
import "./DemosSection.css"
import trackingCall from "../utils/trackingCall"
import updateState from "../utils/updateState"
import PreloadImage from 'react-preload-image'


function stopOtherPlayer (currentPlayer, playerRef) {

    // if another music player is active, shut it off to allow the currentPlayer (clicked)
    // to have air time. And record the current player.

    if ( playerRef.current !== currentPlayer.current && playerRef.current !== "default") {
        playerRef.current.audio.current.pause()
    }
    playerRef.current = currentPlayer.current

    return playerRef
}

const DemosSectionPlayer = (
    {songTitle, feat, song, playerRef}) => {

    const currentPlayer = createRef()

    return (
        <div className="demo-player-box"  >

        <AudioPlayer  className="demo-player-style demo-player-background"
            ref={currentPlayer}
            autoPlay={false}
            // layout="horizontal-reverse"
            preload='none'
            src={song}
            showSkipControls={false}
            showJumpControls={true}
            showFilledProgress={false}
            customAdditionalControls={[]}
            onPlay={() => {
                trackingCall("Played " + songTitle)
                stopOtherPlayer(currentPlayer, playerRef)}}
            onPlayError={e => console.log("ERROR: ", e)}
        />
        <h3 className="track-title">{songTitle}</h3>
        <div className="feat">{feat}</div>
        <br></br>
        </div>
    )
}

function titleSearchForDemos (titleName){

    // pick first selected title from songs list for carousel

    let title = titles.filter(titles => titles.titleName === titleName);

    // next, pull the rest of the titles in the order listed in 'songs.js' to build the
    // the remainder of the carousel

    let remainderTitles = titles.filter(titles => titles.titleName !== titleName);
    let titlesList = title.concat(remainderTitles);

    return titlesList;

}

const createDemosSongs = (titleName, playerRef) => {
    let demoSongs = songs.filter(song => song.titleName === titleName.titleName);
    return (
        <div className="demo-items ">
        {demoSongs.map ((song, index) => (
            <DemosSectionPlayer
                key={song.id}
                songTitle={song.songTitle}
                feat={song.feat}
                song={song.song}
                playerRef={playerRef}
            />
        ))}
        </div>
    )
}

const createDemosSlideHeader = (titleName) => {
    return (
        <div className="demo-slide-container ">
        <h3 className="demo-intro">{titleName.demoDesc}</h3>
        <img className="tracks-img" src={titleName.coverArt} alt={titleName.alt}/>
        {/* <PreloadImage
                    className="someClass"
                    src={titleName.coverArt}
                    alt={titleName.alt}
                    lazy
                /> */}
        </div>
    )
}

const DemosSectionCarouselContainer = (
    {title, appContext, playerRef}) => {

    // below useState is for use with boostrap Carousel

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // title the parm (tested below) would be used to set the first page in the Carousel
    // in the event it was set on the way from the Artists Page.  Otherwise use the default
    // the title set initially by LayoutContainer (the default title of latest release)

    let titlesList = titleSearchForDemos(title)

    return (
        <section id="demos">
        <div className="demo-container" >
        <h3 className="demo-sect-header">Music by Larsxn</h3>
        <Carousel id="demo-carousel"
            activeIndex={index} onSelect={handleSelect}
            interval={15000} data-ride="false" pause="hover"  >
            <Carousel.Item>
                {createDemosSlideHeader(titlesList[0])}
                {createDemosSongs(titlesList[0],playerRef)}
                <a href="#title" className='artist-link'
                onClick={() => {
                  trackingCall(titlesList[0].titleName + " Artists")
                  updateState(titlesList[0].titleName, true, appContext)}}
                  >Artists</a>
            </Carousel.Item>
            <Carousel.Item>
                {createDemosSlideHeader(titlesList[1])}
                {createDemosSongs(titlesList[1],playerRef)}
                <a href="#title" className='artist-link'
                onClick={() => {
                  trackingCall(titlesList[1].titleName + " Artists")
                  updateState(titlesList[1].titleName, true, appContext)}}
                  >Artists</a>
            </Carousel.Item>
            <Carousel.Item>
                {createDemosSlideHeader(titlesList[2])}
                {createDemosSongs(titlesList[2],playerRef)}
                <a href="#title" className='artist-link'
                  onClick={() => {
                    trackingCall(titlesList[2].titleName + " Artists")
                    updateState(titlesList[2].titleName, true, appContext)}}
                  >Artists</a>
            </Carousel.Item>
            <Carousel.Item>
                {createDemosSlideHeader(titlesList[3])}
                {createDemosSongs(titlesList[3],playerRef)}
                <a href="#title" className='artist-link'
                  onClick={() => {
                    trackingCall(titlesList[3].titleName + " Artists")
                    updateState(titlesList[3].titleName, true, appContext)}}
                  >Artists</a>
            </Carousel.Item>
        </Carousel>
        </div>
        </section>
    )
  }

  export default DemosSectionCarouselContainer