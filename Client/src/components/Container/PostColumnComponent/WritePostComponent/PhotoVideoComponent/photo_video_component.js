import React, { Component } from 'react';
import './photo_video_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PhotoVideoComponent extends Component {
    render() {
        return (

            <div className="photovideo">
                <FontAwesomeIcon className="fas fa-image" icon="image" />
                <span>Photo/Video</span>
            </div>

        );
    }
}

export default PhotoVideoComponent;
