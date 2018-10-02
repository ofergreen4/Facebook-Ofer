import React, { Component } from 'react';
import './messenger_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MessengerComponent extends Component {
    render() {
        return (

            <div className="sidemessenger">
                <div className="sidemessengerphoto">
                    <FontAwesomeIcon className="fa-facebook-messenger_sidebar" icon={['fab', 'facebook-messenger']}/>
                    <span>Messenger</span>
                </div>
            </div>

        );
    }
}

export default MessengerComponent;

