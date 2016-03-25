'use strict';

import React from 'react';

class NavbarLinks extends React.Component {

    render () {

        return (
            <div className="page-navigation">
                <div className="section-links">
                    <a className="navbar-links" href="#splash"> HOME </a>
                    <a className="navbar-links" href="#how-it-works"> HOW IT WORKS </a>
                    <a className="navbar-links" href="#why-ayooo"> WHY AYOOO </a>
                    <a className="navbar-links" href="#subscribe"> SUBSCRIBE </a>
                    <a className="navbar-links" href="#footer"> CONTACT US </a>
                </div>
            </div>
        )
    }
}

export default NavbarLinks;
