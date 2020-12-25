const mongoose = require('mongoose');


let postSchema = new mongoose.Schema({
    content :{
        type: String,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'User'
    },
    comments:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'Comment'
    }
},{
    timestamps : true
}
        )


const Post = mongoose.model('Post', postSchema);

module.exports = Post