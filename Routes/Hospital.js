const DataBase = require('../config')

const HospitalRegister =(req,res)=>{
     const {title,address,dept,doctors}= req.body;
     console.log(req.body)

     const HosReg = new DataBase.Hospital({
         title,address,dept,doctors
     })

     HosReg.save(function(err,data){
        if(err){
            console.log(err)
            res.status(400).json(err)
        }
        else{
            res.json(data)
        }
     })
}

const HospitalGet =(req,res)=>{
     const HosGet = DataBase.Hospital

     HosGet.find({},function(err,data){
         if(err){
             res.status(400).json(err)
         }
         else{
             res.status(200).json(data)
         }
     })
}

module.exports={
    HospitalRegister : HospitalRegister,
    HospitalGet:HospitalGet
}