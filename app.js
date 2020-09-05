
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
const Doctor = require('./Routes/Doctor') 
const Hospital = require('./Routes/Hospital')


app.get('/',(req,res)=>{
    Database.App()
    res.json('ok')
    
})

app.post('/Register',(req,res)=> User.UserRegister(req,res,bcrypt))
app.post('/Login',(req,res)=> User.UserLogin(req,res,bcrypt))
app.post('/Doctor/Register',(req,res)=>Doctor.DoctorRegister(req,res))
app.post('/Hospital',(req,res)=>Hospital.HospitalRegister(req,res))
app.get('/Hospital',(req,res)=>Hospital.HospitalGet(req,res))
app.get('/Doctor',(req,res)=>Doctor.DoctorGet(req,res))
app.post('/DocHospital',(req,res)=>Doctor.DoctorChamber(req,res))




app.listen(4040, ()=>{
    console.log('app is running')
})
