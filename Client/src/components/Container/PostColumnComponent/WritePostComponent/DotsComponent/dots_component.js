import React, { Component } from 'react';
import './dots_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DotsComponent extends Component {
    render() {
        return (

            <div className="dots">
                <i className="fas fa-ellipsis-h" />
                <FontAwesomeIcon className="fas fa-ellipsis-h" icon="ellipsis-h" />
            </div>

        );
    }
}

export default DotsComponent;
