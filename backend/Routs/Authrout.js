const { signup, login } = require('../Controllers/Authconroller');
const { singnupValidation, loginValidation } = require('../Midlewere/Authvalidation');

const router = require('express').Router();

// router.post('/login',(req,res)=>{
//     res.send('login succes');
// });
router.post('/login',loginValidation,login);
router.post('/signup',singnupValidation,signup);

module.exports = router;