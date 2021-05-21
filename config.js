const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/medify', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema ;

const Register =new Schema({
    name : {
        type: String,
        required: true
    },
    age:{ 
        type: Number,
         min: 3
        },
    gmail: {
        type:String,
        required:true,
 
    },
    
    date:{
        type:Date
    }
   
})

const User = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

// const Doctor = new Schema({
//     name : String,
//     email : String,
//     degree : {
//          type: String,
//          required: true
//     },
//     address : String,
//     age : {
//         type:Number,
//         max:70,
//         required:true
//     },
//     speciality: String,
//     fees: {
//         type:Number,
//         max: 50000
//     },
//     time:{
//         type: String,
//         required:true
//     },
//     experience : {
//         type: Number,
//         min:1
//     },
//     dept: String,
//     hospital:String

    
// })

// const Hospital = new Schema({
//     title: String,
//     address:String,
//     dept:Array
    
// })

const UserInfo = mongoose.model('Register',Register)
const UserLogin = mongoose.model('User',User)
// const DoctorInfo = mongoose.model('Doctor',Doctor)
// const HospitalInfo = mongoose.model('Hospital',Hospital)
// const App =()=>{
//     console.log('it is working properly')
// }

module.exports={
  Register :UserInfo,
  User: UserLogin,
//   App: App,
//   Doctor : DoctorInfo,
//   Hospital: HospitalInfo
}
