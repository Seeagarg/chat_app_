var express = require('express');
const { signup, login, logout, getUsers } = require('../Controllers/user.controller');
const { secureRoute } = require('../Middleware/secureRoute');
var router = express.Router();

router.post('/sign-up',signup)
router.post('/login',login)
router.post('/log-out',logout)
router.get('/get-users',secureRoute,getUsers)

module.exports = router;
