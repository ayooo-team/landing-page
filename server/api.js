'use strict';

const path = require('path');
const fs = require('fs');

const filePaths = {
    index: path.resolve(__dirname, '../build/index.html'),
    assets: path.resolve(__dirname, '../build'),
    store: path.resolve(__dirname, '../data/store.json')
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
};

function toCSV (data) {

	data = JSON.parse(data);

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
    console.log(result);
    return result;
}
