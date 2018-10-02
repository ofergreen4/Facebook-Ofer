import React, { Component } from 'react';
import './whats_on_your_mind_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nataraja from '../../../../../Images/nataraja.jpg';

class WahtsOnYourMindComponent extends Component {
    render() {
        return (

            <div className="postphoto">
                <img className="postphotodancer" src={nataraja} />
                <textarea rows="1" cols="30" className="on-your-mind-placeholder" placeholder="What's on your mind, Ofer?"></textarea>
            </div>

        );
    }
}

export default WahtsOnYourMindComponent;
