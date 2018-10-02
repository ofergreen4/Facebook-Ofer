import React, { Component } from 'react';
import './my_name_component.css';
import nataraja from '../../../../Images/nataraja.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MyNameComponent extends Component {
    render() {
        return (

                <div className="sidename">
                    <div className="sidenamephoto">
                        <img className="dancer" src={nataraja} />
                        <span>Ofer Green</span>
                    </div>
                </div>

        );
    }
}

export default MyNameComponent;

