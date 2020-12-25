const Post = require('../models/post')

module.exports.home = function(req, res){

    Post.find({})
    .populate('user')
    .populate({
        path : 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, posts){
       // if(err){console.log('error while finding posts');}
        return res.render('home', {
            title : 'Home',
            posts : posts
        });
    })
}
