// import react.js
import React from 'react';
// import react-dom package
import ReactDOM from 'react-dom';
// import App from './js/components/app.react.js';
import App from './js/components/app.react.js';

// /**
//  * ReactDOM.render(
//  *  ReactElement element,
//  *  DOMElement container,
//  *  [function callback]
//  * )
//  */

ReactDOM.render(
    // pass a text prop
    <App text={"hello world"}/>,
    document.getElementById('app')
);