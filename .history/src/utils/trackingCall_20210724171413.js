
import ReactPixel from 'react-facebook-pixel'
import ReactGA from 'react-ga';


// ReactPixel and ReactGA calls for tracking.  Initialization is in index.js

function fbTrack(a,b) {
    if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
        ReactPixel.trackCustom(a, b);
        ReactGA.event({
          category: "Navigation",
          action: a,
          label: a,
          nonInteraction: false ,
        })
    }
  }

function trackingCall (source) {

    try {fbTrack(source, 'trackCustom');}
    catch (err) {alert(err)}

}

export default trackingCall