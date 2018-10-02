import React, { Component } from 'react';
import './feeling_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FeelingComponent extends Component {
    render() {
        return (

            <div className="feeling">
                <FontAwesomeIcon className="far fa-smile" icon="smile" />
                <span>Feeling/Activity</span>
            </div>

        );
    }
}

export default FeelingComponent;
