const Admin=require('../models/admin')
const jwt=require('jsonwebtoken')


const auth=async(req,res,next)=>{
try{
     const token=req.header('Authorization').replace('Bearer ','')
     const decoded=jwt.verify(token,'techswapproject')
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
}
}

module.exports=auth