import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header.js';
import Container from './components/Container/container.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontfabAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserFriends, faGlobe, faQuestionCircle, faSortDown, faFileAlt, faStore, faLightbulb,
  faCalendar, faUsers, faUserCircle, faClock, faWrench, faPencilAlt, faAddressCard, faVideo,
  faImage, faSmile, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger, faFontAwesomeAlt } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

library.add(faSearch, faUserFriends, faGlobe, faQuestionCircle, faSortDown, faFileAlt, faStore, faLightbulb,
  faCalendar, faUsers, faUserCircle, faClock, faWrench, faPencilAlt, faAddressCard, faVideo, faImage, 
  faEllipsisH )
library.add(faFacebookMessenger, faFontAwesomeAlt, faSmile )
library.add(faThumbsUp )

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container/>
      </div>
    );
  }
}

export default App;
