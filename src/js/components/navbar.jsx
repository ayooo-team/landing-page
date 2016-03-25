'use strict';

import React from 'react';
import NavbarLinks from './navbar-links.jsx';
import BurgerIcon from './burger-icon.jsx';

class Navbar extends React.Component {

    // on resize.  if now mobile, isMenuOpen = false
    // on resize.  if now desktop, isMenuOpen = true

    constructor (props) {

        super (props);

        this.state = {
            isMenuOpen: false,
            // isMobileView: false
        };
    }

    toggle () {

        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    render () {

        return (
            <div className="navbar">
                <img className="navbar-logo" src="https://cloud.githubusercontent.com/assets/13470325/13969226/6819285a-f079-11e5-8d0b-ec337b6a2572.png" />
                <BurgerIcon toggle={ this.toggle.bind(this) } isMenuOpen={ this.state.isMenuOpen } />
                <NavbarLinks isMobileView={ this.state.isMobileView } isMenuOpen={ this.state.isMenuOpen } />
            </div>
        );
    }
}

export default Navbar;
