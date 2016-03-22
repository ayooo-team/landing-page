'use strict';

import React from 'react';
import BurgerMenu from './burger-menu.jsx';

class Navbar extends React.Component {

    render () {

        return (
            <div className="navbar">
                <img className="navbar-logo" src="http://www.warrenphotographic.co.uk/photography/bigs/27940-Mallard-duckling-white-background.jpg" />
                <BurgerMenu />
            </div>
        );
    }
}

export default Navbar;
