import React, { Component } from 'react';
import './album_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AlbumComponent extends Component {
    render() {
        return (

            <div className="album">
                <FontAwesomeIcon className="far fa-address-card" icon="address-card" />
                <span>Photo/Video Album</span>
            </div>

        );
    }
}

export default AlbumComponent;
