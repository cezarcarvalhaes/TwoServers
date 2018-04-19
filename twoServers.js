var http = require ('http');

function handleRequest(request, response) {
    response.end("You Rock!");
}

function handleOtherRequest(request, response) {
    response.end("You suck!");
}

var server = http.createServer(handleRequest);

server.listen(7000, function (){
    console.log ("Listening at http://localhost:7000/");
});

var server2 = http.createServer(handleOtherRequest);

server2.listen(7500, function (){
    console.log ("Listening at http://localhost:7500/");
});