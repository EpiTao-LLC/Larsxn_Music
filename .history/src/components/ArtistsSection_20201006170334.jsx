
import React from "react"
import {  Row, Col } from 'react-bootstrap';
import './ArtistsSection.css';
import trackingCall from "../utils/trackingCall"


const ArtistsSection = (
    {key, aName, picture, alt, tag, siteLogo, href, work, finalComment}
    ) => {

    alert ("in Artists Section")

    return (
      <Row >
        <Col >
            <div >
                <img  className="artist-pic-box" src={picture} alt={alt}/>
            </div>
        </Col>
        <Col >
            <div className="artist-text-box">
                <div className="artist-name" > {aName} </div><br/>
                <div className="artist-tag"> {tag}</div><br/>
                <p> {work}</p><br/>
                {siteLogo &&
                    <p> Listen to more of {aName}'s work.</p>
                }
                {siteLogo &&
                    <a href={href}>
                    <button type = "button"
                        className="btn btn-outline-none btn-lg artist-logos">
                        <img onClick={() => {trackingCall("Additional work " + aName)}}
                        onKeyDown={() => {trackingCall("Additional work " + aName)}}
                        className='m-logos'
                        src={siteLogo} alt={aName}
                        role="presentation"
                        />
                    </button>
                    </a>
                }
                <p>{finalComment}</p>
            </div>
        </Col>
      </Row>
    ) }

  export default ArtistsSection