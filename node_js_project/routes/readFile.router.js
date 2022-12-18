const express = require('express');
const readRouter = express.Router();

const { homepage, readFiledata, writeFiledata } = require('../controllers/readFile.controller');
// readRouter.get('/', homepage);
readRouter.get('/', readFiledata);
readRouter.post('/', writeFiledata);


module.exports = readRouter;