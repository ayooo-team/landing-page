const http = require('http');
const fs = require('fs');

const handler = (request, response) => {

    const index = __dirname + "/build/index.html";
    const bundle = __dirname + "/build/bundle.js";
    console.log(request.url);
    if (request.url === "/") {
        console.log("here");
        fs.readFile(index, function (error, file) {

            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(file.toString());
            response.end();
        });
    } else if (request.url === "/bundle.js") {

        fs.readFile(bundle, function (error, file) {

            response.writeHead(200, {"Content-Type": "text/js"});
            response.write(file);
            response.end();
        });
    } else {

        response.writeHead(404);
        response.end();
    }
};

const server = http.createServer(handler);

server.listen(process.env.PORT || 3000, function () {

    console.log("Server running!");
});
