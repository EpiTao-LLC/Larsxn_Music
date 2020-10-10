import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactPixel from 'react-facebook-pixel'
import ReactGA from 'react-ga';

// initialize Facebook and Google Analytics tracking
const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('674289710019508', advancedMatching, options);
ReactGA.initialize('UA-167786271-1', {
  debug: false,
  titleCase: false,
  gaOptions: {
    siteSpeedSampleRate: 100,
  }
});

// record GA page view
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
