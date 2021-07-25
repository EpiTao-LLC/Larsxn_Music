
import React, { useState, createRef } from "react"

import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import titles from "../content_data/titles"
import songs from "../content_data/songs"
// import DemosSectionPlayer from "./DemosSectionPlayer"
import "./DemosSection.css"
import trackingCall from "../utils/trackingCall"
import updateState from "../utils/updateState"

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import H5AudioPlayer from "react-h5-audio-player";


function stopOtherPlayer (currentPlayer, player, setPlayer) {
    console.log('1st current=',currentPlayer, 'other', player)
    if (player == null) {
        setPlayer(currentPlayer)
        // global.otherPlayer.current.audio.current.pause()
    }
    setPlayer(currentPlayer)
    // currentPlayer.current.audio.current.pause()
    console.log('2nd current=',currentPlayer, 'other', player)
}

const DemosSectionPlayer = (
    {songTitle, feat, song, player, setPlayer}) => {

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
            onPlay={() => {trackingCall("Played " + songTitle)
                 stopOtherPlayer(currentPlayer,player, setPlayer)}}
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

    // next pull the rest of the titles in the order listed in 'songs.js' to build the
    // the remainder of the carousel

    let remainderTitles = titles.filter(titles => titles.titleName !== titleName);
    let titlesList = title.concat(remainderTitles);

    return titlesList;

}

const createDemosSongs = (titleName, player, setPlayer) => {
    let demoSongs = songs.filter(song => song.titleName === titleName.titleName);
    return (
        <div className="demo-items ">
        {demoSongs.map ((song, index) => (
            <DemosSectionPlayer
                key={song.id}
                songTitle={song.songTitle}
                feat={song.feat}
                song={song.song}
                player={player}
                setPlayer={setPlayer}
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
        </div>
    )
}

const DemosSectionCarouselContainer = (
    {title, appContext}) => {

    // below useState is for use with boostrap Carousel

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // below useState is for use with tracking currently playing song

    const [player, setPlayer] = useState(createRef());
    console.log('Player', player)

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
                {createDemosSongs(titlesList[0],player, setPlayer)}
                <a href="#title" className='artist-link'
                onClick={() => {
                  trackingCall(titlesList[0].titleName + " Artists")
                  updateState(titlesList[0].titleName, true, appContext)}}
                  >Artists</a>
            </Carousel.Item>
            <Carousel.Item>
                {createDemosSlideHeader(titlesList[1])}
                {createDemosSongs(titlesList[1],player, setPlayer)}
                <a href="#title" className='artist-link'
                onClick={() => {
                  trackingCall(titlesList[1].titleName + " Artists")
                  updateState(titlesList[1].titleName, true, appContext)}}
                  >Artists</a>
            </Carousel.Item>
            <Carousel.Item>
                {createDemosSlideHeader(titlesList[2])}
                {createDemosSongs(titlesList[2],player, setPlayer)}
                <a href="#title" className='artist-link'
                  onClick={() => {
                      trackingCall(titlesList[2].titleName + " Artists")
                      updateState(titlesList[2].titleName, true, appContext)}}
                  >Artists</a>
            </Carousel.Item>
            <Carousel.Item>
                {createDemosSlideHeader(titlesList[3])}
                {createDemosSongs(titlesList[3],player, setPlayer)}
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