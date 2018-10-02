import React, { Component } from 'react';
import './search_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchComponent extends Component {
    render() {
        return (

            <div className="search">
                <input className="search1" type="text" placeholder="Search..." />
                <div className="search2">
                    <FontAwesomeIcon className="fa-search" icon="search" />
                </div>
            </div>

        );  
    }
}

export default SearchComponent;