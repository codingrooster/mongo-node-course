'use strict';

var express = require('express'),
	cons = require('consolidate'),
	mongodb = require('mongodb');



var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, { "Content-Type":"text/plain" } );
	response.end("Server running on Localhost:8000");
});

server.listen(8000);