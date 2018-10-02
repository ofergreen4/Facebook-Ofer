import React, { Component } from 'react';
import './header_right_component.css';
import nataraja from '../../../Images/nataraja.jpg';
import facebook_messenger from '../../../Images/facebook_messenger.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HeaderRightComponent extends Component {
    render() {
        return (

            <div className="headerRight">
            <div className="name">
              <div className="myPhoto">
                <img className="dancer" src={nataraja}/>
                <span>Ofer</span>
              </div>
            </div>
            <div className="home">
              <span>Home</span>
            </div>
            <div className="icons">
              <FontAwesomeIcon className="fa-user-friends" icon="user-friends"/>
              <FontAwesomeIcon className="fa-facebook-messenger_header" icon={['fab', 'facebook-messenger']}/>
              <FontAwesomeIcon className="fa-globe" icon="globe"/>
            </div>
            <div className="help">
              <div className="help1">
                <FontAwesomeIcon className="fas fa-question-circle" icon="question-circle"/>
                <FontAwesomeIcon className="fas fa-sort-down" icon="sort-down"/>
              </div>
            </div>
          </div>

        );
    }
}

export default HeaderRightComponent;