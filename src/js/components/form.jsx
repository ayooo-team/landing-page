'use strict';

import React from 'react';
import classnames from 'classnames';

class Form extends React.Component {

    constructor (props) {

        super ();

        this.getInput = this.getInput.bind(this)
    }

    getSelectedRadio () {
        console.log("inside getSelectedRadio");
        let allOptions = [
            this.refs.shipper,
            this.refs.traveller,
            this.refs.both
        ];

        let chosenOne = allOptions.filter((option) => {
            return option.checked;
        });

        return chosenOne[0];
    }

    checkInput (data, callback) {
        ( data["email"] &&
          data["firstName"] &&
          data["lastName"] &&
          data["nationality"] &&
          data["useOfService"] ) ? callback(true) : callback(false);
    }

    getInput (event) {
        console.log("inside checkInput");
        event.preventDefault();

        let data = {
            email: this.refs.email.value,
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            nationality: this.refs.nationality.value,
            useOfService: this.getSelectedRadio()
        };

        this.checkInput(data, (result) => {
            console.log('>>>>>', result);
            result ? this.submit(data) : alert("Please complete all fields.");
        });
    }

    submit (data) {
        console.log("inside submit");
        $.ajax({
            method: 'POST',
            url: "/register",
            data: data,
            success: function (reply) {
                console.log(reply);
                this.props.hideForm();
            }.bind(this)
        });
    }

    render () {

        return (
            <div className="form">
                <label>Email address</label>
                <input className="form-input" type="email" ref="email" /><br/>

                <label className="form-label">First name</label>
                <input className="form-input" type="text" ref="firstName" /><br/>

                <label className="form-label">Last name</label>
                <input className="form-input" type="text" ref="lastName" /><br/>

                <label className="form-label">Nationality</label>
                <input className="form-input" type="text" ref="nationality" /><br/>

                <div className="form-query-container">
                    <label>How will you use our service?</label><br/>
                    <div className="form-query">
                        <input className="form-radio" type="radio" name="useOfService" value="Shipper" ref="shipper" />
                        Shipper
                    </div>
                    <div className="form-query">
                        <input className="form-radio" type="radio" name="useOfService" value="Traveller" ref="traveller" />
                        Traveller
                    </div>
                    <div className="form-query">
                        <input className="form-radio" type="radio" name="useOfService" value="Both" ref="both" />
                        Both!
                    </div>
                </div>
                <div className="form-register">
                    <a className="ghost-button" onClick={ this.getInput }>REGISTER</a>
                </div>
            </div>
        );
    }
}

export default Form;
