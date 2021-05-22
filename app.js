
//// Varriables and Dependenies
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const dotenv = require('dotenv')
const cors = require('cors')
const bcrypt = require('bcrypt')

////// MiddleWare ................................

const app = express();
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())


////Database Config Global.....................

const Database = require('./config')


///Importing Routes

const User = require('./Routes/User')


app.get('/',(req,res)=>{
    // Database.App()
    res.json('ok')
    
})

app.post('/Register',(req,res)=> User.UserRegister(req,res,bcrypt))
app.post('/Login',(req,res)=> User.UserLogin(req,res,bcrypt))





app.listen(4040, ()=>{
    console.log('app is running')
})
