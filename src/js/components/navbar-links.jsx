'use strict';

import React from 'react';
import classnames from 'classnames';

class NavbarLinks extends React.Component {

    // is this mobile
    // if yes, set isMenuOpen to false
    constructor (props) {

        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {

        if (!this.props.isDesktopView) {

            this.props.toggle();
        }
    }

    render () {

        let classes = classnames(
            "navbar-links-container",
            { "display-none": ( !this.props.isDesktopView && !this.props.isMenuOpen) } // if mobileView and menu is open
        );

        return (
                <div className={ classes }>
                    <div className="navbar-links-wrapper">
                        <a onClick={ this.handleClick } className="navbar-links" href="#how-it-works"> HOW IT WORKS </a>
                        <a onClick={ this.handleClick } className="navbar-links" href="#why-ayooo"> WHY AYOOO </a>
                        <a onClick={ this.handleClick } className="navbar-links" href="#subscribe"> SUBSCRIBE </a>
                        <a onClick={ this.handleClick } className="navbar-links" href="#footer"> CONTACT US </a>
                    </div>
                </div>
        );
    }
}

export default NavbarLinks;
