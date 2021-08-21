const Product = require('../models/Product');
class ProductController {

    showListProd(req,res,next){
        Product.find({})
        .then(products => res.json(products))
        .catch(err => next(err));
    }
    detail(req,res,next){
        const id = req.params.idProd;
        Product.findOne({_id: id})
        .then(product => res.json(product))
        .catch(err => next(err));
    }

    showListProdByCate(req,res,next){
        console.log(req.params.cateName)
        Product.find({category: req.params.cateName})
        .then(products => res.json(products))
        .catch(err => next(err));
    }
}
module.exports = new ProductController