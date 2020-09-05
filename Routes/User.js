const Database = require('../config')



const UserRegister =(req,res,bcrypt ) =>{
    const {name ,gmail,password,age} = req.body;
    //  console.log(req.body)
    const hash = bcrypt.hashSync(password, 10);

      const user = new Database.User({
        email: gmail,
        password: hash
}) 
       
         user.save(function(err,data){
             if(err) {
               res.status(400).json(err)
             }
            else{
            //    res.json(data)
              console.log('user is created')
              const reg = new Database.Register({
                  name: name,
                  gmail: data.email,
                  age: age,
                  data : new Date()

              })

              reg.save(function(err,result){
                  if(err){
                      res.status(400).json(err)
                  }
                  else{
                      res.status(200).json(result)
                  }
              })
            }
            })


}

const UserLogin =(req,res,bcrypt)=>{

    const {email, password } = req.body
     
     Database.User.findOne({email : email },function(err,data){
         if(err){
             res.status(400).json(err)
         }
         else{
            bcrypt.compare(password, data.password, function(err, result) {
                if(err){
                    res.status(400).json(err)
                }
                else{
                    if(!result){
                        res.status(400).send('Worng password')
                    }
                    else{
                        res.status(200).json({ message :" succesfully login "})
                    }
                }
                // res.json(result)
            });
         }
     })

}



module.exports ={
    UserRegister : UserRegister,
    UserLogin : UserLogin
}