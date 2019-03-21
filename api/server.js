const express = require('express');
const helmet = require('helmet');
const path = require('path');

const pathToBuildFolder = path.join(__dirname, '..', 'eu1-cra', 'build');
const pathToIndexHtml = path.join(__dirname, '..', 'eu1-cra', 'build', 'index.html');
console.log(pathToIndexHtml);
const db = require('../data/db.js');

const server = express();

server.use(helmet());
server.use(express.static(pathToBuildFolder));

server.get('/', (req, res) => {
	res.sendFile(pathToIndexHtml);
});

module.exports = server;
