import React, { Component } from 'react';
import './stories_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gili from '../../../../Images/Gili.jpg';
import Shahaf from '../../../../Images/Shahaf.jpg';

class Post1Component extends Component {
    render() {
        return (
            <div className="stories">
            <div className="storiesheader">
                <span>Stories</span>
                <FontAwesomeIcon className="fas fa-ellipsis-h" icon="ellipsis-h" />
            </div>
            <div className="story-1">
                <div className="border-photo-story-1">
                    <img className="gili-story-1" src={Gili} />
                </div>
                <div className="text-story-1">
                    <div className="name-story-1">
                        <span>Gili Schrieber</span>
                    </div>
                    <div className="time-story-1">
                        <span>7 hours ago</span>
                    </div>
                </div>
            </div>
            <div className="story-2">
                <div className="border-photo-story-2">
                    <img className="shahaf-story-2" src={Shahaf} />
                </div>
                <div className="text-story-2">
                    <div className="name-story-2">
                        <span>Shahaf Nadler</span>
                    </div>
                    <div className="time-story-2">
                        <span>12 hours ago</span>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default Post1Component;
