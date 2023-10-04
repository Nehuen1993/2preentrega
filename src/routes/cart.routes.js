const {Router} = require('express')
const {productModel} = require('../models/schemas')
const {cartModel} = require('../models/schemas')

const router = Router()

router.get ('/', async(req, res) => {
    try {
        let carrito = await cartModel.find()
        res.send({result: "success", payload: carrito })
        console.log (carrito)
    } catch (error) {
        console.log(error)
    }
    
})


router.post('/:cid', async (req, res) => {
    try {
    
        const productId = req.params.cid        
        const producto = await productModel.findById(productId)
       

        if (!producto) {
            res.send({ status: "error", error: "Producto no encontrado" })
            return
        }

        const carritoItem = {
            products: [{
            nombre: producto.nombre,
            categoria: producto.categoria,
            precio: producto.precio,
            cantidad: 1,
            imagen: producto.imagen
            }]
            
        };

    
        const result = await cartModel.create(carritoItem)

        res.send({ result: "success", payload: result })
    } catch (error) {
        console.log(error)
    }
})

router.put ('/:cid/:pid', async(req, res) => {
    try {
    
        const cartId= req.params.cid
        const productId = req.params.pid      
        const carrito = await cartModel.findById(cartId)
        
        if (!carrito) {
            res.send({ status: "error", error: "Carrito no encontrado" })
            return
        }

        const productoEnCarrito = carrito.products.find(product => product._id.toString() === productId)
        if (!productoEnCarrito) {
            res.send({ status: "error", error: "Producto no encontrado" })
            return;
        }

        productoEnCarrito.cantidad += 1
       
        await carrito.save()
        
        res.send({ result: "success", payload: carrito })

    } catch (error) {
        console.log(error)
    }
})

router.delete ('/:cid', async(req, res) => {
    try {
        let {cid} = req.params
        let result = await cartModel.deleteOne ({_id:cid})
        res.send({result: "success", payload: result})
    } catch (error) {
        console.log(error)
    }
})

router.delete ('/:cid/:pid', async(req, res) => {
    try {
        const cartId= req.params.cid
        const productId = req.params.pid      
        const carrito = await cartModel.findById(cartId)
        
        if (!carrito) {
            res.send({ status: "error", error: "Carrito no encontrado" })
            return
        }

        const productoEnCarrito = carrito.products.find(product => product._id.toString() === productId)
        if (!productoEnCarrito) {
            res.send({ status: "error", error: "Producto no encontrado" })
            return;
        }

        carrito.products.splice(productoEnCarrito, 1)

        await carrito.save()

        res.send({result: "success", payload: carrito})
    } catch (error) {
        console.log(error)
    }
})



module.exports = router