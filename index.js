const express = require('express');
const cookieParser = require('cookie-parser')
const port = 9000;
const db = require('./config/mongoose')
const expressLayouts = require('express-ejs-layouts');
const SassMiddleware = require('node-sass-middleware');
const User = require('./models/userSchema');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strat');

const MongoStore = require('connect-mongo')(session);


const app = express();



//setting up express layouts
app.use(expressLayouts);

app.use(cookieParser());

app.use(express.urlencoded());


//calling & compiling SASS
app.use(SassMiddleware({
    src :'./assets/scss',
    dest :'./assets/css',
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

app.use(session({
    name : 'P-5',
    secret : 'something',
    saveUninitialized : false,
    resave : false,
    cookie :{
        maxAge :(1000 * 60 * 100)
    },
    store : new MongoStore(
        {
            mongooseConnection : db,
            autoRemove : 'disabled'
        },
        function(err){
            console.log(err || 'connected to mongostore');
        }
    )
}));

app.use(passport.initialize())
app.use(passport.session());





//setting up routes
app.use('/', require('./routes/index'))


//local server
app.listen(port, function(err){
    if(err){
        console.log(`Server is down`);
    }
    console.log(`Server is up & running at port : ${port}`)
});