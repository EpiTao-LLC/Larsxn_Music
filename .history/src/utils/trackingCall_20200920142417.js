import fbq from "gatsby-plugin-facebook-pixel"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"

// added google anayltics, leveraging this function.
// should rename.

function fbTrack(a,b) {
    if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
        console.log(typeof(fbq));
      fbq(a, b);
      trackCustomEvent (a, b);
    }
  }

function trackingCall (source) {
    // console.log(source);
    try {fbTrack('trackCustom', source);}
    catch (err) {alert(err)}

}

export default trackingCall