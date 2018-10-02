import React, { Component } from 'react';
import './pages_feed_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PagesFeedComponent extends Component {
    render() {
        return (

            <div className="sidepagesfeed">
                <div className="sidepagesfeedphoto">
                    <FontAwesomeIcon className="fa-file-alt" icon="file-alt" />
                    <span>Pages Feed</span>
                </div>
            </div>

        );
    }
}

export default PagesFeedComponent;

