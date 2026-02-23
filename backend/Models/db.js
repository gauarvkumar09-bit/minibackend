const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
.then(()=>{
    console.log('mongo db is connected');
}).catch((err)=>{
    console.log('mongo db connect nahi hua hai',err )
})