const {Router} = require('express')
const {productModel} = require('../models/schemas')
const {cartModel} = require('../models/schemas')

const router = Router()

router.post ('/', async(req, res) => {
    try {
        let {nombre, categoria, precio, stock, imagen} = req.body
        if (!nombre || !categoria || !precio || !stock || !imagen ) {
            res.send({status: "error", error: "Faltan datos"})
        }
       
        let result = await productModel.create({nombre, categoria, precio, stock, imagen, })
        res.send({result: "success", payload: result})
    } catch (error) {
        console.log(error)
    }
})




router.get ('/', async(req, res) => {
    try {
        let page = req.query.page ? parseInt(req.query.page) : 1
        if (!page) page = 1
        let limit = req.query.limit ? parseInt(req.query.limit) : 10;
        if (!limit) limit = 10;

        let paginado = await productModel.paginate({}, { page, limit, lean: true })
        paginado.prevLink = paginado.hasPrevPage ? `http://localhost:8080/products?page=${paginado.prevPage}` : '';
        paginado.nextLink = paginado.hasNextPage ? `http://localhost:8080/products?page=${paginado.nextPage}` : '';
        paginado.isValid = !(page <= 0 || page > paginado.totalPages)
        
        res.send({result: "success", payload: paginado})
    } catch (error) {
        console.log(error)
    }
    
})





router.delete ('/:pid', async(req, res) => {
    try {
        let {pid} = req.params
        let result = await productModel.deleteOne ({_id:pid})
        res.send({result: "success", payload: result})
    } catch (error) {
        console.log(error)
    }
})


module.exports = router