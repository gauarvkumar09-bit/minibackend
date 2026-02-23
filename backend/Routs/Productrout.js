const ensureAuthentication = require('../Midlewere/Auth');

const router = require('express').Router();

router.get('/',ensureAuthentication,(req,res)=>{
    console.log('login user ki detail',req.user)
    res.status(200).json([
        {
            name:"sudarshan",
            price:1000
        },
        {
        name:"vijaydhanus",
        price:2000000000
        }
    ])
});

module.exports = router;