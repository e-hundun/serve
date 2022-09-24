'use strict';

const path = require('path');
const fs = require('fs/promises');

function Serve(root) {

    return async (ctx, next) => {
        const { req, res } = ctx;
        const file = path.join(root, req.url);
        try {
            const data = await fs.readFile(file);
            res.end(data);
        } catch (err) {
            console.log(err);
            return next();
        }
    };
}

module.exports = Serve;
