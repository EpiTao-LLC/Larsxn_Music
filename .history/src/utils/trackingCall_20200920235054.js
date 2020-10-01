import ReactPixel from 'react-facebook-pixel'
import ReactGA from 'react-ga';

// added google anayltics, leveraging this function.
// should rename.


const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);R

function fbTrack(a,b) {
    if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
        console.log(typeof(fbq));
        ReactPixel.trackCustom(a, b);
      // trackCustomEvent (a, b);
    }
  }

function trackingCall (source) {
    // console.log(source);
    try {fbTrack('trackCustom', source);}
    catch (err) {alert(err)}

}

export default trackingCall