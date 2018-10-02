import React, { Component } from 'react';
import SideBarComponent from './SideBarComponent/side_bar_component.js';
import PostColumnComponent from './PostColumnComponent/post_column_component.js';
import EventColumnComponent from './EventColumnComponent/event_column_component.js';
import './container.css';

class Container extends Component {
    render() {
        return (

            <div className="container">
                <div className="fbpage">
                    <SideBarComponent />
                    <PostColumnComponent />
                    <EventColumnComponent />
                </div>
            </div>

        );
    }
}

export default Container;