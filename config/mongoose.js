const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learning');

const db = mongoose.connection;

db.on('err', console.error.bind('Failed to connect to db'));

db.once('open', function(err){
    if(err){
        console.log('failed')
    }
        console.log('Connected to db');
} );

module.exports = db;
