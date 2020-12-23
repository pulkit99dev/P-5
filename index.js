const express = require('express');
const port = 9000;
const db = require('./config/mongoose')
const ExpressLayouts = require('express-ejs-layouts');
const assets = require('./assets')


const app = express();

//setting up views
app.set('view engine', 'ejs');
app.set('views', './views');

//setting up express layouts
app.use(ExpressLayouts());



app.use(express.urlencoded());





//local server
app.listen(port, function(err){
    if(err){
        console.log(`Server is down`);
    }
    console.log(`Server is up & running at port : ${port}`)
});