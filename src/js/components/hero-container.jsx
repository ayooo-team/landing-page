'use strict';

import React from 'react';

class HeroContainer extends React.Component {

    render () {

        return (
            <div className="hero-container">
                <h1 className="hero-title">AYOOO</h1>
                <h4 className="hero-slogan">The on-the-way social delivery network</h4>
                <p className='hero-description'>
                    We connect people who want to send
                    <br />goods somewhere with trusted travellers
                    <br />going in the same direction
                </p>
            </div>
        );
    }
}

export default HeroContainer;
