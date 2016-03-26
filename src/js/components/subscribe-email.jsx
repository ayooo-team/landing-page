'use strict';

import React from 'react';
import GoogleForm from './google-form.jsx';
import Form from './form.jsx';

class SubscribeEmail extends React.Component {

    render () {

        return (
            <div className="container">
                <a className="anchor-tags" name="subscribe">
                    &nbsp;
                </a>
                <Form />
            </div>
        );
    }
}

export default SubscribeEmail;
