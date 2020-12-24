const User = require('../models/userSchema')

module.exports.signup = function(req, res){
    res.render('sign-up', {
        title :'Sign-up'
    })
}

module.exports.signin = function(req, res){
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
    }
    User.findOne({email : req.body.email}, function(err, user){
        if(err){console.log(`Error while creating user`); return;}
        User.create(req.body, function(err, user){
            if(err){console.log('Error while creating user');
            return res.redirect('/user/signin')}

        })
    })
}