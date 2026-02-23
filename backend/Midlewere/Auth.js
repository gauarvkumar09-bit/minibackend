const jwt = require('jsonwebtoken');

const ensureAuthentication = (req,res,next)=>{
    const auth = req.headers['authorization'];
    if (!auth){
        return res.status(403)
        .json({messege:'unothorized  JWT token is require'});
    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECREAT);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(403)
            .json({massage:'unothorized  JWT token wrong or expired'});
        
    }
}
// mudule.exports = ensureAuthentication;
module.exports = ensureAuthentication;