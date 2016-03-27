'use strict';

import React from 'react';
import GoogleForm from './google-form.jsx';
import Form from './form.jsx';

class SubscribeEmail extends React.Component {

    constructor (props) {

        super(props);

        this.state = {
            isFormVisible: true
        };
        this.hideForm = this.hideForm.bind(this);

    }

    hideForm () {

        this.setState({
            isFormVisible: false
        });
    }

    render () {

        let formArea = this.state.isFormVisible ? <Form hideForm={ this.hideForm } /> : <div>Thanks!</div>

        return (
            <div className="container">
                <a className="anchor-tags" name="subscribe">
                    &nbsp;
                </a>
                <h3 className="info-container-title title-how-it-works">INTERESTED?</h3>
                { formArea }
            </div>
        );
    }
}

export default SubscribeEmail;
