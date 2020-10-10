import ReactPixel from 'react-facebook-pixel'
import ReactGA from 'react-ga';


const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('674289710019508', advancedMatching, options);
ReactGA.initialize('UA-167786271-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

function fbTrack(a,b) {
    if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
        console.log(typeof(fbq));
        ReactPixel.trackCustom(a, b);
        // ReactGA.pageview(window.location.pathname + window.location.search);
        ReactGA.event({
          category: "customTracking",
          event: a,
          value: 10,
          nonInteraction: false ,
        })
      // trackCustomEvent (a, b);
    }
  }

function trackingCall (source) {
    // console.log(source);
    try {fbTrack(source, 'trackCustom');}
    catch (err) {alert(err)}

}

export default trackingCall