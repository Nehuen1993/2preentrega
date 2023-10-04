// const mongoose = require ('mongoose')

// const productCallection = "products"
// const cartCallection = "cart"
// const mongoosePaginate = require('mongoose-paginate-v2')



// const productSchema = new mongoose.Schema({
//     nombre: {type: String, required: true, max: 100}, 
//     categoria: {type: String, required: true, max: 100},
//     precio: {type: Number, required: true, max: 10000}, 
//     stock: {type: Number, required: true, max: 100}, 
//     imagen: {type: String, required: true, max: 100},  
    
// })
// productSchema.plugin (mongoosePaginate)

// const cartSchema = new mongoose.Schema({
//    products:
//    [{
//     nombre: {type: String, required: true, max: 100}, 
//     categoria: {type: String, required: true, max: 100},
//     precio: {type: Number, required: true, max: 10000}, 
//     cantidad: {type: Number, max: 100}, 
//     imagen: {type: String, required: true, max: 100},  
//    }]
    
// })
// cartSchema.plugin (mongoosePaginate)


// const productModel = mongoose.model(productCallection, productSchema)
// const cartModel = mongoose.model(cartCallection, cartSchema)

// module.exports = {productModel, cartModel}