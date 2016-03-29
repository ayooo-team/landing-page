'use strict';

const path = require('path');
const fs = require('fs');

const filePaths = {
    store: path.resolve(__dirname, '../build/store.json'),
    csvFile: path.resolve(__dirname, '../build/registered.csv'),
};

module.exports = {

    getRegisteredUsers: function getRegisteredUsers (request, reply) {

        // does file exist?
        fs.stat(filePaths.store, function (error, stats) {
            if (error) {

                return reply("Nothing to see yet.");
            }
            fs.readFile(filePaths.store, function (error, file) {

                if (error) throw new Error(error);

                var converted = toCSV(file.toString());

                reply(file.toString());
            });
        });
    },

    saveFormData: function saveFormData (request, reply) {

        var data = request.payload;

        fs.readFile(filePaths.store, function(error, fileContent) {

            fileContent = JSON.parse(fileContent);
            fileContent.push(data);

            fs.writeFile(filePaths.store, JSON.stringify(fileContent, null, 4), 'utf-8', function (error) {

                if (error) throw new Error(error);
                console.log("Successfully written json");
            });

            fs.writeFile(filePaths.csvFile, toCSV(fileContent), 'utf-8', function (error) {

                if (error) throw new Error(error);
                console.log("Successfully written csv");
                reply.file(filePaths.csvFile);
            });
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
