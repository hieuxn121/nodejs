const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/MeController')

router.get('/stored/course', newsController.stored)
module.exports = router