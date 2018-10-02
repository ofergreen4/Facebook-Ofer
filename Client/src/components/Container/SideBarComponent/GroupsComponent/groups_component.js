import React, { Component } from 'react';
import './groups_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GroupsComponent extends Component {
    render() {
        return (

            <div className="sidegrpous">
                <div className="sidegroupsphoto">
                <FontAwesomeIcon className="fas fa-users" icon="users" />
                    <span>Groups</span>
                </div>
            </div>

        );
    }
}

export default GroupsComponent;