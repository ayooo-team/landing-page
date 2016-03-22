'use strict';

import React from 'react';
import MailchimpForm from './mailchimp-form.jsx';

class SubscribeEmail extends React.Component {

    render () {

        return (
            <div>
                <h3>Interested?</h3>
                <MailchimpForm />
            </div>
        );
    }
}

export default SubscribeEmail;
