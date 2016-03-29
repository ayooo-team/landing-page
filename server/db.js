'use strict';

const url = require('url');
const redis = require('redis');

var chosenURL = process.env.REDISCLOUD_URL || "redis://localhost:6379";
var dbURL = url.parse(chosenURL);

var client = redis.createClient(
    dbURL.port,
    dbURL.hostname,
    { no_ready_check: true }
);

if (process.env.REDISCLOUD_URL) {

    client.auth(dbURL.auth.split(':')[1]);
}

client.on('error', function(err) {
    console.log('Redis error: ' + err);
});

module.exports = client;
