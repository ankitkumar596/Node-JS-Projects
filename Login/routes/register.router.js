const express = require('express')
const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json()

const { registerController, getUser, authenticateEmail } = require('../controllers/register.controller')
const registerRouter = express.Router();


registerRouter.get('/', getUser)
registerRouter.post('/', authenticateEmail, registerController)
registerRouter.get('/', getUser)


module.exports = registerRouter;