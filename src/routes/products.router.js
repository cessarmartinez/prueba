const {Router} = require ('express')
const { ProductManagerFile } = require('../managerDaos/productManager')

const router = Router()
const productManager = new ProductManagerFile()

router.get('/', async (req, res)=>{
    const products = await productManager.getProducts()
    res.send({status: 'success', payload: products})
})

module.exports = router