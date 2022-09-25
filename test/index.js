'use strict';

const Serve = require('..');

const path = require('path');
const request = require('supertest');

const root = path.join(__dirname, 'root');
const app = (req, res) => {
    Serve(root)({ req, res }, () => { })
};


it('GET /text.txt', done => {
    request(app)
        .get('/text.txt')
        .expect(200)
        .expect('Content in /text.txt.\n', done);
});
