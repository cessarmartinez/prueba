const {Router} = require ('express')

const router = Router()

router.get('/register', (req, res) => {
    res.render('registerForm', {
        style: 'index.css'
    })
})

router.post('/register', (req, res)=>{
    const {namee, email, password} = req.body
    res.send({
        namee, 
        email,
        password,
        mensaje: 'Registro con exito'
    })
})

module.exports = router