// BUILD YOUR SERVER HERE

const express = require('express')

const server = express();

server.get('/', (req, res) => {
    res.send('hello world')
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
