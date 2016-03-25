'use strict';

import React from 'react';
import classnames from 'classnames';

class BurgerIcon extends React.Component {

    constructor (props) {

        super (props);

        this.state = {
            isMenuOpen: false
        };
    }

    toggle () {

        this.setState({
            menuOpen: !this.state.isMenuOpen
        });
    }

    render () {

        let classes = classnames(
            "burger-menu-icon",
            { "menu-open": this.props.isMenuOpen }
        );

        return (
            <div className={ classes } onClick={ this.props.toggle }>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default BurgerIcon;
