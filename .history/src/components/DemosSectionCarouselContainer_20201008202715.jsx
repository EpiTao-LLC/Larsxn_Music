
import React, { useState } from "react"

import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import titles from "../content_data/titles"
import songs from "../content_data/songs"
import DemosSectionPlayer from "./DemosSectionPlayer"
import { titleNameContext } from "./LayoutContainer"
import "./DemosSection.css"
import trackingCall from "../utils/trackingCall"

function titleSearchForDemos (titleName){
    // NOTE:  this function is for future use.  Currently, 'requested title' is always default.
    // first pull the requested title, which will be the first page in the demo carousel.

    let title = titles.filter(titles => titles.titleName === titleName);


    // then pull the rest of the titles in the order listed in 'songs.js' to build the
    // the remainder of the carousel

    let remainderTitles = titles.filter(titles => titles.titleName !== titleName);

    let titlesList = title.concat(remainderTitles);

    return titlesList;

}


const createDemosSongs = (titleName) => {
    let demoSongs = songs.filter(song => song.titleName === titleName.titleName);
    return (
        <div className="demo-items ">
        {demoSongs.map ((song, index) => (
            <DemosSectionPlayer
                key={song.id}
                songTitle={song.songTitle}
                feat={song.feat}
                song={song.song}
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

const DemosSectionCarouselContainer = ({title}) => {

    //for use with boostrap Carousel

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // title the parm (tested below) would be used to set the first page in the Carousel
    // in the event it was set on the way from the Artists Page.  Otherwise use the default
    // the title set initially by LayoutContainer (the default title of latest release)

    let titlesList =[]
    let defaultTitleName = React.useContext(titleNameContext)

    console.log ('carousle title', title)

    if (title){
        titlesList = titleSearchForDemos(title);
    } else {
        titlesList = titleSearchForDemos(defaultTitleName );
    }

    return (
        <section id="demos">
        <div className="demo-container" >
        <h3 className="demo-sect-header">Sample Music by Larsxn</h3>
        <Carousel id="demo-carousel"
            activeIndex={index} onSelect={handleSelect}
            interval={15000} data-ride="false" pause="hover"  >
            <Carousel.Item>
                {createDemosSlideHeader(titlesList[0])}
                {createDemosSongs(titlesList[0])}
                <a href= "/components/ArtistsLayoutContainer" className='artist-link'
                  state={{titleName: titlesList[0].titleName}}>Artists</a>
            </Carousel.Item>
            <Carousel.Item>
                {createDemosSlideHeader(titlesList[1])}
                {createDemosSongs(titlesList[1])}
                <a href = "/components/ArtistsLayoutContainer"
                  onClick={() => {trackingCall(titlesList[1].titleName + " Artists")}}
                  className='artist-link'
                  state={{titleName: titlesList[1].titleName}}>Artists</a>
            </Carousel.Item>
        </Carousel>
        </div>
        </section>
    )
  }

  export default DemosSectionCarouselContainer