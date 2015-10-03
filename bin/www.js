#!/usr/bin/env node

'use strict';

let path = require('path');
let app = require(path.join(`${ __dirname }/../server/index.js`));
let http = require('http');

let server = http.createServer(app);
server.listen(app.get('port'));

server.on('listening', onServerListening);
server.on('error', onServerError);

function onServerListening () {
    console.log(`Listening on ${ app.get('port') }`);
};

function onServerError (error) {
    console.log(error);
};
