import React, { Component } from 'react';
import './mccann_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MccannComponent extends Component {
    render() {
        return (

            <div className="sidemccann">
                <div className="sidemccannphoto">
                <FontAwesomeIcon className="fa-lightbulb" icon="lightbulb" />
                    <span>McCann Inside</span>
                </div>
            </div>

        );
    }
}

export default MccannComponent;





