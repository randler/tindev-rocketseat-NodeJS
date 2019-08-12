const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const server  = express();

mongoose.connect('mongodb+srv://randler:randler@cluster0-qqhjx.mongodb.net/monistack8_randler?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);