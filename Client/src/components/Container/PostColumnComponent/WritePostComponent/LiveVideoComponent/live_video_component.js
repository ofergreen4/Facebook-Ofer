import React, { Component } from 'react';
import './live_video_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LiveVideoComponent extends Component {
    render() {
        return (

            <div className="video">
                <FontAwesomeIcon className="fas fa-video" icon="video" />
                <span>Live Video</span>
            </div>

        );
    }
}

export default LiveVideoComponent;
