import React, { Component } from 'react';
import './pages_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PagesComponent extends Component {
    render() {
        return (
            <div className="sidepages">
                <div className="sidepagesphoto">
                    <FontAwesomeIcon className="fa-font-awesome-alt" icon={['fab', 'font-awesome-alt']}/>
                    <span>Pages</span>
                </div>
            </div>

        );
    }
}

export default PagesComponent;