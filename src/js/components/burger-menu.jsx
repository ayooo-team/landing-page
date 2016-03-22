'use strict';

import React from 'react';

class BurgerMenu extends React.Component {

    constructor (props) {

        super(props);
        this.BurgerMenu = () => this.BurgerMenu();
        this.state = {
            isMenuOpen: 'none'
        };
    }

    burgerMenuIcon () {

        var menuLinks = document.getElementsByClassName("navbar-links")[0];
        menuLinks.getAttribute("style").match('none') ?
        (this.setState({
            isMenuOpen: 'block'
        })) : (this.setState({
            isMenuOpen: 'none'
        }));
    }

    render () {

        return (
            <div className="page-navigation">
                <img className="burger-menu-icon" onClick={ this.burgerMenuIcon.bind(this) } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAFHV9BxXGPZqdqCdogeeEum0RSNy3NI-qN1khsGmNng_j14RBg" />
                <div className="section-links">
                    <a className="navbar-links" style={{display: this.state.isMenuOpen}} href="#how-it-works"> How It Works </a>
                    <a className="navbar-links" style={{display: this.state.isMenuOpen}} href="#why-ayooo"> Why Ayooo </a>
                </div>
            </div>
        )
    }
}

export default BurgerMenu;
