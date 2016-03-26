'use strict';

import React from 'react';

class Form extends React.Component {

    constructor (props) {

        super (props);

        this.state = {
            canSubmit: false
        };
        this.submit = this.submit.bind(this)
    }

    enableButton () {

        this.setState({
            canSubmit: true
        });
    }

    disableButton () {

        this.setState({
            canSubmit: false
        });
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

        return chosenOne[0].value;
    }

    submit (event) {

        event.preventDefault();

        let data = {
            email: this.refs.email.value,
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            nationality: this.refs.nationality.value,
            useOfService: this.getSelectedRadio()
        };

        $.ajax({
            method: 'POST',
            url: "/register",
            data: data,
            success: function (reply) {
                console.log(reply);
                this.disableButton();
            }
        }.bind(this));
    }

    render () {

        return (
            <div className="form">
                <label>Email address</label>
                <input type="email" ref="email" /><br/>

                <label>First name</label>
                <input type="text" ref="firstName" /><br/>

                <label>Last name</label>
                <input type="text" ref="lastName" /><br/>

                <label>Nationality</label>
                <input type="text" ref="nationality" /><br/>

                <label>How will you use our service?</label><br/>
                <input type="radio" name="useOfService" value="Shipper" ref="shipper">Shipper</input><br/>
                <input type="radio" name="useOfService" value="Traveller" ref="traveller">Traveller</input><br/>
                <input type="radio" name="useOfService" value="Both" ref="both">Both!</input><br/>
                
                <button onClick={ this.submit }>Register your interest</button>
            </div>
        );
    }
}

export default Form;
