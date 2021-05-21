const Admin=require('../models/admin')
const jwt=require('jsonwebtoken')
const config=require('config')


const auth=async(req,res,next)=>{
try{
    console.log(req)
     const token=req.header('Authorization').replace('Bearer ','')
     console.log(token)
     const decoded=jwt.verify(token,config.get('secret'))
     const admin=await Admin.findOne({username:decoded.username,'tokens.token':token})
 

     if(!admin){
         throw new Error
     }
    req.token=token
    req.admin=admin
     next()

}
catch(e){
      res.status(403).send({"Error":"Please Authenticate"})   
      console.log(e)
}
}

module.exports=auth