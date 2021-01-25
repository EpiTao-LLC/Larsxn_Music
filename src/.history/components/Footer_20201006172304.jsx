
import React from "react"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShareButtons from "./SocialShare"
import "./Footer.css"
import trackingCall from "../utils/trackingCall"


const Footer = (
    ) => {
      const siteTitle = "Larsxn - New Music";
      const url = "www.larsxn.com";

    return(

    <footer className='container-fluid' id='footer'>
        <div >
          <ShareButtons title={siteTitle} url={url}/>
        </div>
        <br></br>

      <a className="email-icon email-btn" href="mailto:info@larsxn.com?subject=Hey Larsxn!"
          onClick={() => {trackingCall("Contact")}}>
        <FontAwesomeIcon icon={faEnvelope} className="social-icon"/>
        <span className='tooltiptext'>Email Larsxn</span>
      </a>
      <p>© Copyright 2020 Larsxn</p>

    </footer>
  )
}

  export default Footer