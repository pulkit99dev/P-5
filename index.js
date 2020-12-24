const express = require('express');
const port = 9000;
const db = require('./config/mongoose')
const ExpressLayouts = require('express-ejs-layouts');
const SassMiddleware = require('node-sass-middleware');
const User = require('./models/userSchema');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strat');

const routes = require('./routes/index')


const app = express();

//calling & compiling SASS
app.use(SassMiddleware({
    src :'/assets/scss',
    dest :'/assets/css',
    debug : true,
    outputStyle :'expanded',
    prefix :'/css'
}))

//setting up assets
app.use(express.static('./assets'));

// extracting styles & scripts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setting up views
app.set('view engine', 'ejs');
app.set('views', './views');

//setting up express layouts
app.use(ExpressLayouts);



app.use(express.urlencoded());




//setting up routes
app.use('/', require('./routes/index'))


//local server
app.listen(port, function(err){
    if(err){
        console.log(`Server is down`);
    }
    console.log(`Server is up & running at port : ${port}`)
});