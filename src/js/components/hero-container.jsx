'use strict';

import React from 'react';

class HeroContainer extends React.Component {

    render () {

        return (
            <div className="hero-container">
                <a className="anchor-tags" name="splash">
                    &nbsp;
                </a>
                <h1 className="hero-title">AYOOO</h1>
                <h4 className="hero-slogan">The peer-to-peer delivery network</h4>
                <p className='hero-description'>
                    We connect people who want to send goods somewhere with trusted travellers going in the same direction
                </p>
                <div className="subscribe-interest-button"><a href="#subscribe">SUBSCRIBE YOUR INTEREST</a></div>
            </div>
        );
    }
}

export default HeroContainer;
