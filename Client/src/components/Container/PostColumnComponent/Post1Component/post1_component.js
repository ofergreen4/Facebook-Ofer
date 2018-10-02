import React, { Component } from 'react';
import './post1_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Laruga from '../../../../Images/Laruga.jpg';
import Laruga_Handstand from '../../../../Images/Laruga_Handstand.jpg';
import like from '../../../../Images/like.PNG';
import love from '../../../../Images/love.png';
import haha from '../../../../Images/haha.png';
import dolike from '../../../../Images/dolike.png';
import docomment from '../../../../Images/docomment.png';
import doshare from '../../../../Images/doshare.png';

class Post1Component extends Component {
    render() {
        return (

            <div className="post-1">
                <div className="postgeneraltext-1">
                    <div className="posttext-1">
                        <div className="postphoto-1">
                            <img className="laruga-1" src={Laruga} />
                        </div>
                        <div className="postdiv-1">
                            <div className="postname-1">
                                <div className="post-name-1">
                                    <span>Laruga Glaser</span>
                                </div>
                                <div className="date-post1">
                                    <span>January 12nd at 10:15am</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit-post-1">
                        <button className="remove-post-1" >Remove post</button>
                        <FontAwesomeIcon className="fas fa-ellipsis-h" icon="ellipsis-h" />
                    </div>
                </div>
                <div className="postimage-1">
                    <img className="laruga-postimage-1" src={Laruga_Handstand}/>
                </div>
                <div className="reactions">
                    <div className="reactions-space">
                        <div className="reactions-icons">
                            <img className="like" src={like} />
                            <img className="love" src={love} />
                            <img className="haha" src={haha} />
                        </div>
                    </div>
                    <span>Shahaf Nadler and Gili Schrieber</span>
                </div>
                <div className="lcs">
                    <div className="dolike">
                       
                        <FontAwesomeIcon className="far fa-thumbs-up" icon="thumbs-up" />
                        <span>Like</span>
                    </div>
                    <div className="docomment">
                        <img className="docomment-image" src={docomment} />
                        <span>Comment</span>
                    </div>
                    <div className="doshare">
                        <img className="doshare-image" src={doshare} />
                        <span>Share</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Post1Component;
