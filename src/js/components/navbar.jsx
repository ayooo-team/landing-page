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

            if (scroll > 20) {


                $('.navbar').addClass('scrolled');
                $('.navbar-logo').addClass('scrolled');

                if (!this.state.isDesktopView) {

                    $('.navbar-links-container').addClass( 'scrolled');
                }
            }
            if (scroll <= 20) {

                $('.navbar').removeClass('scrolled');
                $('.navbar-logo').removeClass('scrolled');

                if (!this.state.isDesktopView) {

                    $('.navbar-links-container').removeClass( 'scrolled');
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
            });
        } else if (windowWidth < 460 && this.state.isDesktopView) {

            this.setState({
                isDesktopView: false,
                isMenuOpen: false
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
                <NavbarLinks toggle={ this.toggleMenuVisibility } isDesktopView={ this.state.isDesktopView } isDesktopView={ this.state.isDesktopView } isMenuOpen={ this.state.isMenuOpen } />
            </div>
        );
    }
}

export default Navbar;
