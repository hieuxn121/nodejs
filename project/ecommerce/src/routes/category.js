const express = require('express');
const router = express.Router();
const categoryController = require('../app/controllers/CategoryControllers');

router.get('/', categoryController.showListCate)

module.exports = router;