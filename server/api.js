'use strict';

const path = require('path');
const fs = require('fs');
const client = require('./db.js');

const filePaths = {
    store: path.resolve(__dirname, '../build/store.json'),
    csvFile: path.resolve(__dirname, '../build/registered.csv'),
};

module.exports = {

    saveFormData: function saveFormData (request, reply) {

        var data = request.payload;

        client.hget('data', 'registeredUsers', function (error, dataJSON) {

            if (error) throw new Error(error);

            var dataArray = JSON.parse(dataJSON);
            dataArray.push(data);

            client.hset('data', 'registeredUsers', JSON.stringify(dataArray), function (error) {

                if (error) throw new Error(error);
                console.log("Successfully written to database");

                reply(); // jquery ajax is expecting a response
            });
        });
    },

    download: function download (request, reply) {

        // get data from db
        client.hget('data', 'registeredUsers', function (error, dataJSON) {

            if (error) {
                throw new Error(error);
            }
            var csvFile = toCSV(dataJSON);
            reply(csvFile);
        });
    }
};

function toCSV (data) {

    if (typeof data === 'string') {

        data = JSON.parse(data);
    }
	// get data
	var topRow = Object.keys(data[0]).join(",") + "\r\n";

    var result = data.reduce(function (previous, datapoint, i) {

        previous += datapoint.email + ",";
		previous += datapoint.firstName + ",";
		previous += datapoint.lastName + ",";
        previous += datapoint.nationality + ",";
        previous += datapoint.useOfService + "\r\n";

        return previous;
    }, topRow);

    return result;
}
