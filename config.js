const mongoose = require('mongoose')
require('dotenv').config();


mongoose.connect(process.env.DB_URL, {
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




const UserInfo = mongoose.model('Register',Register)
const UserLogin = mongoose.model('User',User)

const App =()=>{
    console.log(process.env.DB_URL);
}

module.exports={
  Register :UserInfo,
  User: UserLogin,
  App: App,

}
