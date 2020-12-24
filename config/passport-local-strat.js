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

passport.serializeUser(function(user, done){
    done(null, user.id)
})
passport.deserializeUser(function(err, user){
    User.findById(id, function(err, user){
    if(err){
        console.log(err);
    }
    return done(null, user);
})
})

module.exports = passport;