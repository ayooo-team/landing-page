'use strict';

import React from 'react';
import NavbarLinks from './navbar-links.jsx';

class Navbar extends React.Component {

    constructor (props) {

        super (props);

        this.state = {
            isDisplayed: false
        };
    }

    toggleNavbarLinks () {


        this.setState({
            linksDisplayed: !this.state.linksDisplayed
        });
    }

    render () {

        return (
            <div className="navbar">
                <img className="navbar-logo" src="https://cloud.githubusercontent.com/assets/13470325/13969226/6819285a-f079-11e5-8d0b-ec337b6a2572.png" />
                <img className="burger-menu-icon" onClick={ this.toggleNavbarLinks.bind(this) } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAFHV9BxXGPZqdqCdogeeEum0RSNy3NI-qN1khsGmNng_j14RBg" />
                <NavbarLinks linksDisplayed={ this.state.linksDisplayed } />
            </div>
        );
    }
}

export default Navbar;
