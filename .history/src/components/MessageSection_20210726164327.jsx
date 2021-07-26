
import React from "react"
import {  Row, Col } from 'react-bootstrap';
import './MessageSection.css';
import PreloadImage from 'react-preload-image'


const MessageSection = (
    {leftAlign, picture, alt, text}
    ) => (
      <Row >
        {leftAlign &&
            <Col >
            <div >
                {/* <img  className="pic-box" src={picture} alt={alt}/> */}
                <PreloadImage
                    className="pic-box"
                    src={picture}
                    alt={alt}
                    lazy
                />
            </div>
            </Col>
        }
        <Col >
            <div className="msg-box">
                <p > {text} </p>
            </div>
        </Col>
        {!leftAlign &&
            <Col >
            <div >
                {/* <img className="pic-box" src={picture} alt={alt}/> */}
                <PreloadImage
                    className="pic-box"
                    src={picture}
                    lazy
                />
            </div>
            </Col>
        }
      </Row>
    )

  export default MessageSection