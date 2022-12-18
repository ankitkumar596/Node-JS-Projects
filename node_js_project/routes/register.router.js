const express = require('express')
const registerController = require('../controllers/register.controller');
const registerRouter = express.Router();

registerRouter.get('/', registerController.getUser); //home page
registerRouter.get('/register', registerController.getUsers);//all users
registerRouter.post('/', registerController.postUser);
registerRouter.get('/:registerID', registerController.getId);

module.exports = registerRouter;