import React, { Component } from 'react';
import './event_column_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StoriesComponent from './StoriesComponent/stories_component.js';

class EventColumnComponent extends Component {
    render() {
        return (

            <div className="eventcolumn">
                <StoriesComponent />
                <div className="events"></div>
                <div className="language"></div>
            </div>

        );
    }
}

export default EventColumnComponent;
