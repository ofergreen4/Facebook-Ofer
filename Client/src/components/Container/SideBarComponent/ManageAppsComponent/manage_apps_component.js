import React, { Component } from 'react';
import './manage_apps_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ManageAppsComponent extends Component {
    render() {
        return (

            <div className="sidemanageapps">
                <div className="sidemanageappsphoto">
                    <i className="fas fa-wrench" />
                    <FontAwesomeIcon className="fas fa-wrench" icon="wrench" />
                    <span>Manage Apps</span>
                </div>
            </div>

        );
    }
}

export default ManageAppsComponent;

