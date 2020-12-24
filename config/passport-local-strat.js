const passport = require('passport');

const LocalStrategy = require('passport-local');

const User = require('../models/userSchema');

passport.use(new LocalStrategy({
    usernameField : 'email'
},
    function(email, password, done){
        User.findOne({email : email}, function(err, user){
            if(err){return done(err);}
            if(!user || user.password != password)
            {return done(null, false);}
            return done(null, user);
        });
    }
))

module.exports = passport;