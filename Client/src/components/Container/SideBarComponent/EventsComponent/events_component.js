import React, { Component } from 'react';
import './events_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EventsComponent extends Component {
    render() {
        return (

            <div className="sideevents">
                <div className="sideeventsphoto">
                    <FontAwesomeIcon className="fa-calendar" icon="calendar" />
                    <span>Events</span>
                </div>
            </div>

        );
    }
}

export default EventsComponent;