import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'
import "./SocialShare.scss"
import trackingCall from "../../utils/trackingCall"

const ShareButtons = ({title, url, twitterHandle, tags}) => {

    return(
        <div>
          <FacebookShareButton url={url} >
                <FacebookIcon  size={40} round={true}
                    onClick={() => {trackingCall("Facebook share")}}/>
         </FacebookShareButton>

         <FacebookMessengerShareButton url={url} >
                <FacebookMessengerIcon  size={40} round={true}
                  onClick={() => {trackingCall("Facebook Messenger share")}}
                />
         </FacebookMessengerShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40} round={true}
                  onClick={() => {trackingCall("Twitter share")}}
                />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={40} round={true}
                 onClick={() => {trackingCall("Whatsapp share")}}
               />
           </WhatsappShareButton>


        </div>
      )

}
export default ShareButtons