import React, { Component } from 'react';
import './on_this_day_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class OnThisDayComponent extends Component {
    render() {
        return (

             <div className="sideonthisday">
             <div className="sideonthisdayphoto">
                 <FontAwesomeIcon className="far fa-clock" icon="clock"/>
                 <span>On This Day</span>
             </div>
         </div>

        );
    }
}

export default OnThisDayComponent;

