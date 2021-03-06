'use strict';

import React from 'react';
import Navbar from './navbar.jsx';
import HeroContainer from './hero-container.jsx';
import InfoContainer from './info-container.jsx';
import SubscribeEmail from './subscribe-email.jsx';
import Footer from './footer.jsx';

class AppContainer extends React.Component {

    render () {

        return (
            <div>
                <Navbar />
                <HeroContainer />
                <InfoContainer title={ "HOW IT WORKS" } id={ "how-it-works" }/>
                <InfoContainer title={ "WHY US" } id={ "why-ayooo" } />
                <SubscribeEmail />
                <Footer />
            </div>
        );
    }
}

export default AppContainer;
