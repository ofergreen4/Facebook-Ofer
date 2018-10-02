import React, { Component } from 'react';
import './side_bar_component.css';
import nataraja from '../../../Images/nataraja.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyNameComponent from './MyNameComponent/my_name_component.js';
import NewsFeedComponent from './NewsFeedComponent/news_feed_component.js';
import MessengerComponent from './MessengerComponent/messenger_component.js';
import MarketplaceComponent from './MarketplaceComponent/marketplace_component.js';
import ShortcutComponent from './ShortcutComponent/shortcut_component.js';
import MccannComponent from './MccannComponent/mccann_component.js';
import ExploreComponent from './ExploreComponent/explore_component.js';
import EventsComponent from './EventsComponent/events_component.js';
import GroupsComponent from './GroupsComponent/groups_component.js';
import PagesComponent from './PagesComponent/pages_component.js';
import FriendsListComponent from './FriendsListComponent/friends_list_component.js';
import OnThisDayComponent from './OnThisDayComponent/on_this_day_component.js';
import PagesFeedComponent from './PagesFeedComponent/pages_feed_component.js';
import ManageAppsComponent from './ManageAppsComponent/manage_apps_component.js';


class SideBarComponent extends Component {
    render() {
        return (

            <div className="sidebar">
                <MyNameComponent/>
                <NewsFeedComponent/>
                <MessengerComponent/>
                <MarketplaceComponent/>
                <ShortcutComponent/>
                <MccannComponent/>
                <ExploreComponent/>
                <EventsComponent/>
                <GroupsComponent/>
                <PagesComponent/>
                <FriendsListComponent/>
                <OnThisDayComponent/>
                <PagesFeedComponent/>
                <ManageAppsComponent/>

            </div>

        );
    }
}

export default SideBarComponent;

