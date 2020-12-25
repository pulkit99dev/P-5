const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    content:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require : true
    },
    post :{
        type: mongoose.Schema.Types.ObjectId,
        require : true
    }
},{
    timestamps: true
}
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment