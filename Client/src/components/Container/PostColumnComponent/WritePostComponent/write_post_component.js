import React, { Component } from 'react';
import './write_post_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MakePostComponent from './MakePostComponent/make_post_component.js'
import AlbumComponent from './AlbumComponent/album_component';
import LiveVideoComponent from './LiveVideoComponent/live_video_component';
import PhotoVideoComponent from './PhotoVideoComponent/photo_video_component';
import WhatsOnYourMindComponent from './WhatsOnYourMindComponent/whats_on_your_mind_component';
import FeelingComponent from './FeelingComponent/feeling_component';
import DotsComponent from './DotsComponent/dots_component';
import OnYourMindPostButtonComponent from './OnYourMindPostButtonComponent/on_your_mind_post_button_component'

class WritePostComponent extends Component {
    render() {
        return (

            <div className="writepost">
                <div className="item-1">
                    <MakePostComponent />
                    <AlbumComponent />
                    <LiveVideoComponent />
                </div>
                <div className="item-2">
                    <WhatsOnYourMindComponent />
                </div>
                <div className="item-3">
                    <PhotoVideoComponent />
                    <FeelingComponent />
                    <DotsComponent />
                    <OnYourMindPostButtonComponent />
                </div>
            </div>

        );
    }
}

export default WritePostComponent;
