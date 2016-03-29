'use strict';

const fs = require('fs');
const Hapi = require('hapi');
const Inert = require('inert');
const Basic = require('hapi-auth-basic');
const path = require('path');

const routes = require('./routes.js');
const authUser = require('./auth-user.js');


const plugins = [Inert, Basic];

const server = new Hapi.Server();

server.connection({
    port: process.env.PORT || 3000
});

server.register(plugins, function (error) {

    if (error) throw new Error(error);

    server.auth.strategy('simple', 'basic', {
        validateFunc: authUser
    });

    server.route(routes);

    server.start(function () {
        console.log(`Server running at ${server.info.uri}`);
    });
});
