"use strict";

/**
 * Run this on a raspberry pi
 * then browse (using google chrome/firefox) to http://[pi ip]:8080/
 */


const http = require('http');
const express = require('express');
const login = require('./routes/login')
const bodyParser = require('body-parser');
const cors = require('cors');


const WebStreamerServer = require('./lib/raspivid');

const app = express();

//public website
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/vendor/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/login', login);



const server = http.createServer(app);
const silence = new WebStreamerServer(server);
server.listen(80);
