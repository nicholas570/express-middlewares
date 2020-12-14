const api = require('express').Router();
const middleware = require('./middleware');

api.use('/supermiddleware', middleware);

module.exports = api;
