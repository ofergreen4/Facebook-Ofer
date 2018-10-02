import React, { Component } from 'react';
import './news_feed_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewsFeedComponent extends Component {
    render() {
        return (

            <div className="sidenewsfeed">
                <div className="sidenewsfeedphoto">
                    <FontAwesomeIcon className="fas fa-file-alt" icon="file-alt"/>
                    <span>News Feed</span>
                </div>
            </div>

        );
    }
}

export default NewsFeedComponent;

