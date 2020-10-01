import ReactPixel from '@zsajjad/react-facebook-pixel'
import {trackCustomEvent} from "gatsby-plugin-google-analytics"

// added google anayltics, leveraging this function.
// should rename.


const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);

function fbTrack(a,b) {
    if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
        console.log(typeof(fbq));
        ReactPixel.trackCustom(a, b);
      trackCustomEvent (a, b);
    }
  }

function trackingCall (source) {
    // console.log(source);
    try {fbTrack('trackCustom', source);}
    catch (err) {alert(err)}

}

export default trackingCall