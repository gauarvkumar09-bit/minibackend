const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const Authrout = require('./Routs/Authrout')
const Productrout = require('./Routs/Productrout')
require('dotenv').config();

require('./Models/db');

const PORT = process.env.PORT || 8080;

app.get('/ping',(req,res)=>{
    res.send('hiib');
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',Authrout);
app.use('/products',Productrout);

app.listen(PORT,()=>{
    console.log(`server chau hai ${PORT} par`)
})