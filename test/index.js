'use strict';

const Serve = require('..');
const { Pipeline } = require('@e-hundun/onion');

const path = require('path');
const request = require('supertest');

const root = path.join(__dirname, 'root');
const next = ctx => ctx.res.writeHead(404).end('404 from next()');

describe('Serve(root)', () => {

    const app = (req, res) => {
        Pipeline(
            Serve(root)
        )({ req, res }, next);
    };

    it('GET /text.txt', done => {
        request(app)
            .get('/text.txt')
            .expect(200)
            .expect('Content in /text.txt.\n', done);
    });

    it('GET /nowhere', done => {
        request(app)
            .get('/nowhere')
            .expect(404)
            .expect('404 from next()', done);
    });

});
