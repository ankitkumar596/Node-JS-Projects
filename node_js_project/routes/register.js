
const express = require('express')
const router = express.Router();

// require controller
const { getregister, postregister, getuser, login } = require('../controllers/register');

// require middleware
const { validationMiddleware } = require('../middleware/register.middleware');
const { loginMiddlware } = require('../middleware/login.middleware');

// routes
router.get('/list', getregister)
router.get('/:id', getuser)
router.post('/register', validationMiddleware, postregister)
router.post('/login', loginMiddlware, login)


module.exports = router;