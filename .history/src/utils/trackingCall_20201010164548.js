import ReactPixel from 'react-facebook-pixel'
import ReactGA from 'react-ga';

function fbTrack(a,b) {
    if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
        ReactPixel.trackCustom(a, b);
        ReactGA.event({
          category: "Navigation",
          action: a,
          nonInteraction: false ,
        })
    }
  }

function trackingCall (source) {

    try {fbTrack(source, 'trackCustom');}
    catch (err) {alert(err)}

}

export default trackingCall