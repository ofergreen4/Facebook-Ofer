import React, { Component } from 'react';
import './post_column_component.css';
import nataraja from '../../../Images/nataraja.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WritePostComponent from './WritePostComponent/write_post_component.js';
import Post1Component from './Post1Component/post1_component.js';


class PostColumnComponent extends Component {
  render() {
    return (

      <div className="postcolumn">
        <WritePostComponent/>
        <div className="posts">
        <Post1Component/>
        </div>
      </div>

    );
  }
}

export default PostColumnComponent;
