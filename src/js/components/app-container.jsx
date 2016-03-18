'use strict';

import React from 'react';
import Navbar from './navbar.jsx';
import HeroContainer from './hero-container.jsx';
import HowItWorks from './how-it-works.jsx';
import WhyAyooo from './why-ayooo.jsx';
import SubscribeEmail from './subscribe-email.jsx';
import Footer from './footer.jsx';

class AppContainer extends React.Component {

    render () {

        return (
            <div>
                <Navbar />
                <h1>This is inside the AppContainer</h1>
                <HeroContainer />
                <HowItWorks />
                <WhyAyooo />
                <SubscribeEmail />
                <Footer />
            </div>
        );
    }
}

export default AppContainer;
