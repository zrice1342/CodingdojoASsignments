const { Product } = require('../models/products.model');
module.exports.index = (request, response) => {
    response.json({
        message: "This is the product"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(product => response.json(products))
        .catch(err => response.json(err))
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}