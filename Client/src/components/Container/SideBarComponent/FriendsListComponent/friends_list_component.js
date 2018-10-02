import React, { Component } from 'react';
import './friends_list_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FriendsListComponent extends Component {
    render() {
        return (

            <div className="sidefriendlists">
                <div className="sidefriendlistsphoto">
                    <FontAwesomeIcon className="fas fa-user-circle" icon="user-circle" />
                    <span>Friend Lists</span>
                </div>
            </div>

        );
    }
}

export default FriendsListComponent;





