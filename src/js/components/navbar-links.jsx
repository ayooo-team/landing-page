'use strict';

import React from 'react';
import classnames from 'classnames';

class NavbarLinks extends React.Component {

    render () {

        let classes = classnames(
            "navbar-links-container",
            { "display-none": this.props.linksDisplayed }
        );

        return (
                <div className={ classes }>
                    <a className="navbar-links" href="#splash"> HOME </a>
                    <a className="navbar-links" href="#how-it-works"> HOW IT WORKS </a>
                    <a className="navbar-links" href="#why-ayooo"> WHY AYOOO </a>
                    <a className="navbar-links" href="#subscribe"> SUBSCRIBE </a>
                    <a className="navbar-links" href="#footer"> CONTACT US </a>
                </div>
        );
    }
}

export default NavbarLinks;
