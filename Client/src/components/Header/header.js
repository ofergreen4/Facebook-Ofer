import React, { Component } from 'react';
import SearchComponent from './SearchComponent/search_component.js';
import HeaderRightComponent from './HeaderRightComponent/header_right_component.js';
import Facebok_Logo from '../../Images/Facebok_Logo.png';
import './header.css';

class Header extends Component {
  render() {
    return (
    <div className="header">
      <div className="headerLeft">
        <div className="header-fblogo">
          <img className="facebookLogo" src={Facebok_Logo} />
        </div>
        <SearchComponent/>
      </div>
      <HeaderRightComponent/>
    </div>
     
    );
  }
}

export default Header;