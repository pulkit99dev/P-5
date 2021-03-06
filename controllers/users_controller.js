const User = require('../models/userSchema')

module.exports.signup = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('sign-up', {
        title :'Sign-up'
    })
}

module.exports.signin = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    res.render('sign-in', {
        title :'Sign-in'
    })
}

module.exports.profile = function(req, res){
    res.render('profile', {
        title :'User Profile'
    })
}

module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back')
    };
    User.findOne({email : req.body.email}, function(err, user){
        if(err){console.log(`Error while creating user`);
        return;}
        if(!user){
        User.create(req.body, function(err, user){
            if(err){console.log('Error while creating user');return}
            return res.redirect('/users/sign-in');
        
        });
    }else{
            return res.redirect('back')
        };
        });
}

module.exports.createSession = function(req, res){
    return res.redirect('/')
}

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/')
}