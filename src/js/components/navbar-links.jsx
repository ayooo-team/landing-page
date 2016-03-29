'use strict';

import React from 'react';
import classnames from 'classnames';

class NavbarLinks extends React.Component {

    render () {

        let classes = classnames(
            "navbar-links-container",
            { "display-none": ( !this.props.isDesktopView && !this.props.isMenuOpen) } // if mobileView and menu is open
        );

        return (
                <div className={ classes }>
                    <div className="navbar-links-wrapper">
                        <a className="navbar-links" href="#how-it-works"> HOW IT WORKS </a>
                        <a className="navbar-links" href="#why-ayooo"> WHY AYOOO </a>
                        <a className="navbar-links" href="#subscribe"> SUBSCRIBE </a>
                        <a className="navbar-links" href="#footer"> CONTACT US </a>
                    </div>
                </div>
        );
    }
}

export default NavbarLinks;
