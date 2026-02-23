
const bcrypt = require('bcrypt');
const Usermodel = require('../Models/User');
const jwt= require('jsonwebtoken');

const signup = async (req,res)=>{
    try{
const {name,email,password} = req.body;
const user = await Usermodel.findOne({email});
if(user){
    return res.status(409)
    .json({messege:'User is alredy there,you can login',succes:false});
}
const userModel = new Usermodel({name,email,password});
userModel.password = await bcrypt.hash(password,10);
await userModel.save();
res.status(201)
.json({
    massage:"singup alredy",
    success:true 
})
    }catch (err){
res.status(500)
.json({
    massage:"inyterval server error",
    succes:false
})
    }
}

const login = async (req,res)=>{
    try{
const {email,password} = req.body;
const user = await Usermodel.findOne({email});
const errmsg= 'authentication failed email or password is wrong';
if(!user){
    return res.status(403)
    .json({message:errmsg,success:false});
}
const ispassword = await bcrypt.compare(password,user.password);
if(!ispassword){
    return res.status(403)
    .json({message:errmsg,success:false});
}
const jwtToken = jwt.sign(
    { email:user.email,_id:user.id },
    process.env.JWT_SECREAT,
    {expiresIn:'24h'}
)

res.status(200)
.json({
    message:"logon succes",
    success:true ,
    jwtToken,
    email,
    name:user.name
})
    }catch (err){
res.status(500)
.json({
    message:"inyterval server error",
    success:false
})
    }
}

module.exports = {
    signup,
    login
}
