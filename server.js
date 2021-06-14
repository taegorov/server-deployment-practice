'use strict';

const express = require('express');
const Person = require('./Person.js');

const app = express();

app.get('/', (request, response) => {
  response.send({ "message": "thanks" });
});

app.get('/data', (request, response) => {
  response.send(new Person('Tim', 32));
});

module.exports = app;