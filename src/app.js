const express = require('express')
const cookieParser = require('cookie-parser')
// import express from 'express'
const userRouter = require ('./routes/user.router')
const productRouter = require('./routes/products.router')
const viewRouter = require('./routes/views.router')
const registerRouter = require ('./routes/register.router')
const chatRouter = require('./routes/chat.router')
const { uploader } = require('./utils/multer.js')
const {Server} = require('socket.io')

const app = express()
const PORT = 8080

const httpServer = app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
})

const io = new Server(httpServer)


//---------CONFIGURACIÓN DE HANDLEBARS--------------------
const handlebars = require ('express-handlebars')

app.engine('handlebars', handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')
//-------------------------------


app.use(express.json()) // body-parser
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/static', express.static(__dirname+'/public'))


 
app.use('/api/usuarios', userRouter)
app.use('/api/products', productRouter)
app.use('/', viewRouter)
app.use('/register', registerRouter)
app.use('/chat', chatRouter)



app.post('/single', uploader.single('myfile'), (req, res)=>{
    res.status(200).send({
        status: 'succes',
        message: 'se subió correctamente'
    })
})

let messages = []
io.on('connection', socket =>{
    
    console.log('nuevo cliente conectado')
    socket.on('message', data => {
        messages.push(data)
        io.emit('messageLogs', messages)
    })

    socket.on('authenticated', data => {
        socket.broadcast.emit('newUserConnected', data)
    })
})

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).send('Todomal')
})






