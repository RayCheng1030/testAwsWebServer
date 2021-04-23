const express = require('express');
const app = express();
const postRoute = require('./router/router');
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');
require('dotenv/config');

//middleware
app.use(bodyParser.json());
app.use('/posts',postRoute);


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true , useUnifiedTopology: true},(err)=>{
    if(err) console.log("MongoDB connect Error ",err);
    else app.listen(port,()=>{
        console.log(`WebServer start running at http:localhost:${port}`);
    })
});