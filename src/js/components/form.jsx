'use strict';

import React from 'react';
import classnames from 'classnames';

class Form extends React.Component {

    constructor (props) {

        super ();

        this.checkInput = this.checkInput.bind(this)
    }

    getSelectedRadio () {
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

    checkInput (event) {
        event.preventDefault();

        let data = {
            email: this.refs.email.value,
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            nationality: this.refs.nationality.value,
            useOfService: this.getSelectedRadio()
        };

        ( data["email"] ||
          data["firstName"] ||
          data["lastName"] ||
          data["nationality"] ||
          data["useOfService"] === "" || "undefined") ?
         alert("Please complete all fields.") : this.submit(data);
    }

    submit (data) {

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
                <input className="" type="email" ref="email" /><br/>

                <label className="form-label">First name</label>
                <input type="text" ref="firstName" /><br/>

                <label className="form-label">Last name</label>
                <input type="text" ref="lastName" /><br/>

                <label className="form-label">Nationality</label>
                <input type="text" ref="nationality" /><br/>

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
                    <a className="ghost-button" onClick={ this.checkInput }>REGISTER</a>
                </div>
            </div>
        );
    }
}

export default Form;
