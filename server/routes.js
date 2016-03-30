'use strict';

const fs = require('fs');
const path = require('path');
const api = require('./api.js');

const filePaths = {
    index: path.resolve(__dirname, '../build/index.html'),
    admin: path.resolve(__dirname, '../build/admin.html'),
    assets: path.resolve(__dirname, '../build'),
    csvFile: path.resolve(__dirname, '../build/registered.csv')
};

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: {
            file: filePaths.index
        }
    },
    {
        method: 'GET',
        path: '/{fileName*}',
        handler: {
            directory: {
                path: filePaths.assets
            }
        }
    },
    {
        method: 'POST',
        path: '/register',
        handler: api.saveFormData
    },
    {
        method: 'GET',
        path: '/admin',
        config: {
            auth: 'simple',
            handler: {
                file: filePaths.admin
            }
        }
    },
    {
        method: 'GET',
        path: '/download',
        handler: api.download
    }
];
