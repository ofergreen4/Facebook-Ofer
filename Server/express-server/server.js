const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users/');
const posts = require('./posts/');
const path = require('path');
// const fs = require('fs');
const server = express();

server.use(bodyParser.json());

server.use("/api/users/", users);
server.use("/api/posts/", posts);

// users-list/server + ../dist
const distFolder = path.join(__dirname, '../../Client/build');

server.use(express.static(distFolder));

server.listen(process.env.PORT || 9090);

