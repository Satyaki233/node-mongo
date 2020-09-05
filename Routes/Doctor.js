const Database = require('../config')


const DoctorRegister=(req,res)=>{
      const {name,email,address,age,speciality,time,fees,experience,degree,hospital,dept} = req.body

       const DocReg = new Database.Doctor({
           name ,
           email,
           address,
           age,
           speciality,
           experience,
           time,
           fees,
           degree,
           hospital,
           dept

       })

       DocReg.save(function(err,data){
           if(err){
               console.log(err)
               res.status(400).json(err)
           }
           else{
               res.json(data)
           }
       })
}



const DoctorGet =(req,res)=>{
    const HosGet = Database.Doctor

    HosGet.find({},function(err,data){
        if(err){
            res.status(400).json(err)
        }
        else{
            res.status(200).json(data)
        }
    })
}

const DoctorChamber =(req,res)=>{
     const {name,hospital,dept } = req.body

     Database.Doctor.find({hospital,dept },function(err,data){
         if(err){
            res.status(400).json(err)
         }
         else{
           console.log(data)
           res.json(data)
     


        }
     })
}


module.exports={
    DoctorRegister: DoctorRegister,
    DoctorGet:DoctorGet,
    DoctorChamber : DoctorChamber
}
