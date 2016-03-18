'use strict';

import React from 'react';
import Navbar from './navbar.jsx';

class AppContainer extends React.Component {

    render () {

        return (
            <div>
                <h1>This is inside the AppContainer</h1>
                <Navbar />
            </div>
        );
    }
}

export default AppContainer;
