import React, { Component } from 'react';
import './marketplace_component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MarketplaceComponent extends Component {
    render() {
        return (

            <div className="sidemarketplace">
                <div className="sidemarketplacephoto">
                    <FontAwesomeIcon className="fa-store" icon="store" />
                    <span>Marketplace</span>
                </div>
            </div>

        );
    }
}

export default MarketplaceComponent;


