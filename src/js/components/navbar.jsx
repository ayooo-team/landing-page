'use strict';

import React from 'react';
import NavbarLinks from './navbar-links.jsx';
import BurgerIcon from './burger-icon.jsx';

class Navbar extends React.Component {

    constructor (props) {

        super (props);

        this.state = {
            isMenuOpen: false,
            isDesktopView: (window.innerWidth >= 460)
        };
        this.handleResize = this.handleResize.bind(this);
        this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
    }

    componentDidMount () {

        window.addEventListener('resize', this.handleResize);

        $(window).scroll(() => {


            let scroll = $(window).scrollTop();

            console.log(scroll);
            if (this.state.isDesktopView) {

                if (scroll > 100) {

                    $('.navbar').addClass('scrolled');
                    $('.navbar-logo').addClass('scrolled');
                    $('.navbar-links-container').addClass('scrolled');
                }
                if (scroll <= 100) {

                    $('.navbar').removeClass('scrolled');
                    $('.navbar-logo').removeClass('scrolled');
                    $('.navbar-links-container').removeClass('scrolled');
                }
            }
        });
    }

    handleResize () {

        let windowWidth = window.innerWidth;

        if (windowWidth >= 460 && !this.state.isDesktopView) {

            this.setState({
                isDesktopView: true,
                isMenuOpen: true
            }, () => {
                console.log("desktop view?", this.state.isDesktopView);
            });
        } else if (windowWidth < 460 && this.state.isDesktopView) {

            this.setState({
                isDesktopView: false,
                isMenuOpen: false
            }, () => {
                console.log("desktop view?", this.state.isDesktopView);
            });
        }
    }

    toggleMenuVisibility () {

        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    render () {

        return (
            <div className="navbar">
                <img className="navbar-logo" src="https://cloud.githubusercontent.com/assets/13470325/13969226/6819285a-f079-11e5-8d0b-ec337b6a2572.png" />
                <BurgerIcon toggle={ this.toggleMenuVisibility } isMenuOpen={ this.state.isMenuOpen } />
                <NavbarLinks isDesktopView={ this.state.isDesktopView } isMenuOpen={ this.state.isMenuOpen } />
            </div>
        );
    }
}

export default Navbar;
