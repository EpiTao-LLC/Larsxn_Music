
import React from "react"
import {  Col, button} from 'react-bootstrap';
import './ChannelsSection.css';
import trackingCall from "../utils/trackingCall"


const ChannelsSection = (
    {cName, logo, href}
    ) => (

      <Col>
        <a href={href}>
          <button type = "button"
            className="btn btn-outline-none btn-lg m-logos">
            <img onClick={() => {trackingCall("Channel " + cName)}}
            onKeyDown={() => {trackingCall("Channel " + cName)}}
             className='m-logos'
              src={logo} alt={cName}
              role="presentation"
            />
          </button>
        </a>
      </Col>
  )

  export default ChannelsSection