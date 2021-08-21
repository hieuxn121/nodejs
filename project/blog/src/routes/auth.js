const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController')
router.get('/', authController.login);
router.post('/', authController.postLogin);
module.exports  = router;