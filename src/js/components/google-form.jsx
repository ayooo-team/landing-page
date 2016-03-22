'use strict';

import React from 'react';

class GoogleForm extends React.Component {

    render () {

        return (
            <div className="google-form-container">
                <iframe className="google-form" src="https://docs.google.com/forms/d/1GpgEEBOvNubCVLHxlfviWDomygcOZI71uynRjz1vAuw/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
            </div>
        );
    }
}

export default GoogleForm;
