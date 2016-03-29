'use strict';

const bcrypt = require('bcrypt');
const client = require('./db.js');


function authUser (request, username, password, callback) {

    client.hget("users", username, function (error, hash) {

        if (error) throw new Error(error);

        if (!hash) {

            callback (null, false);
        }
        bcrypt.compare(password, hash, function (error, isValid) {

            callback(null, isValid, {user: username});
        });
    });

}

module.exports = authUser;
