const express = require('express');
const router = express.Router();
const productControllers = require('../app/controllers/ProductControllers');

router.get('/:idProd', productControllers.detail);
router.get('/category/:cateName', productControllers.showListProdByCate);
router.get('/', productControllers.showListProd);

module.exports = router;
