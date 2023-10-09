const mongoose = require ('mongoose')



const cartSchema = new mongoose.Schema({
   products:
   [{
    nombre: {type: String, required: true, max: 100}, 
    categoria: {type: String, required: true, max: 100},
    precio: {type: Number, required: true, max: 10000}, 
    cantidad: {type: Number, max: 100}, 
    imagen: {type: String,  max: 100},  
   }]
    
})


const cartModel = mongoose.model('carts', cartSchema)

module.exports = cartModel