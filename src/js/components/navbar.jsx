'use strict';

import React from 'react';
import BurgerMenu from './burger-menu.jsx';

class Navbar extends React.Component {

    render () {

        return (
            <div className="navbar">
                <img className="navbar-logo" src="https://cloud.githubusercontent.com/assets/13470325/13969226/6819285a-f079-11e5-8d0b-ec337b6a2572.png" />
                <BurgerMenu />
            </div>
        );
    }
}

export default Navbar;
