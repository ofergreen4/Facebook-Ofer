import React, { Component } from 'react';
import './make_post_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MakePostComponent extends Component {
    render() {
        return (

            <div className="makepost">
                <FontAwesomeIcon className="fas fa-pencil-alt" icon="pencil-alt" />
                <span>Make Post</span>
            </div>

        );
    }
}

export default MakePostComponent;
