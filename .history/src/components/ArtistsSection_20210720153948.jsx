
import React from "react"
import {  Row, Col } from 'react-bootstrap';
import './ArtistsSection.css';
import trackingCall from "../utils/trackingCall"
import ErrorBoundary from "./ErrorBoundary";
import updateState from "../utils/updateState"

const ArtistsSection = (
    {aName, picture, alt, tag, siteLogo, href, work, finalComment, appContext}
    ) => {

    return (
    <ErrorBoundary>
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
                        <img onClick={() => {trackingCall("Additional work " + aName)
                            updateState ('home', true, appContext)}}
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
      </ErrorBoundary>
    ) }

  export default ArtistsSection