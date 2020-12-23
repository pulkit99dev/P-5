const express = require('express');
const port = 9000;
const db = require('./config/mongoose')


const app = express();

app.use(express.urlencoded());





//local server
app.listen(port, function(err){
    if(err){
        console.log(`Server is down`);
    }
    console.log(`Server is up & running at port : ${port}`)
});