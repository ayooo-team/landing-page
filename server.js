'use strict';

const fs = require('fs');
const Hapi = require('hapi');
const Inert = require('inert');
const Basic = require('hapi-auth-basic');
const bcrypt = require('bcrypt');
const path = require('path');


const server = new Hapi.Server();
const plugins = [Inert, Basic];
const filePaths = {
    index: path.join(__dirname, 'build/index.html'),
    assets: path.join(__dirname, 'build'),
    store: path.join(__dirname, 'data/store.json')
};
const credentials = require('./credentials.js');

server.connection({
    port: process.env.PORT || 3000
});


server.register(plugins, function (error) {

    if (error) throw new Error(error);

    server.auth.strategy('simple', 'basic', {
        validateFunc: auth
    });

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: {
                file: filePaths.index
            }
        },
        {
            // serve bundle
            method: 'GET',
            path: '/{fileName*}',
            handler: {
                directory: {
                    path: filePaths.assets
                }
            }
        },
        {
            // handle form data
            method: 'POST',
            path: '/register',
            handler: saveFormData
        },
        {
            method: 'GET',
            path: '/admin',
            config: {
                auth: 'simple',
                handler: function (request, reply) {
                    console.log(request.auth);

                    reply.file(filePaths.store);
                }
            }
        }
    ]);

    server.start(function () {
        console.log(`Server running at ${server.info.uri}`);
    });
});

function auth (request, username, password, callback) {

    if (username !== credentials.user) {

        callback (null, false);
    }
    bcrypt.compare(password, credentials.password, function (error, isValid) {

        callback(null, isValid, {user: username});
    });
}


function saveFormData (request, reply) {

    var data = request.payload;

    fs.readFile(filePaths.store, function(error, content) {

        content = JSON.parse(content);
        content.push(data);

        fs.writeFile(filePaths.store, JSON.stringify(content, null, 4), 'utf-8', function (err) {

            if (err) throw new Error(err);
            console.log("Successfully written to file");
            reply.file(filePaths.store);
        });
    });
}
