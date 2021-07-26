
import React from "react"
import {  Row, Col } from 'react-bootstrap';
import './MessageSection.css';


const MessageSection = (
    {leftAlign, picture, alt, text}
    ) => (
      <Row >
        {leftAlign &&
            <Col >
            <div >
                <img  className="pic-box" src={picture} alt={alt}/>
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
                <img className="pic-box" src={picture} alt={alt}/>
            </div>
            </Col>
        }
      </Row>
    )

  export default MessageSection