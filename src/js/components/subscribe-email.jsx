'use strict';

import React from 'react';
import GoogleForm from './google-form.jsx';

class SubscribeEmail extends React.Component {

    render () {

        return (
            <div className="container">
                <h3>Interested?</h3>
                <GoogleForm />
            </div>
        );
    }
}

export default SubscribeEmail;
