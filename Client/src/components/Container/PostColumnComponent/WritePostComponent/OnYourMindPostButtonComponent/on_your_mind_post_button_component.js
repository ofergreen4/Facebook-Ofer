import React, { Component } from 'react';
import './on_your_mind_post_button_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OnYourMindPostButtonComponent extends Component {
    render() {
        return (

            <div className="on-your-mind-post-button">
            <button type="button" className="whats-on-your-mind-post-button">Post</button>
        </div>

        );
    }
}

export default OnYourMindPostButtonComponent;
