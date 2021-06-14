'use strict';

const server = require('../server.js');
const supertest = require('supertest');

const mockRequest = supertest(server);

describe('Express server', () => {
  test('should return `thanks` on a GET to /', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ "message": "thanks" });
  });

  test('should return a `Person` / json with name and age using GET method on route /data', async () => {
    const response = await mockRequest.get('/data');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tim');
    expect(response.body.age).toEqual(32);
  });
});

