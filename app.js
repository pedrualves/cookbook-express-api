'use strict';

let express = require('express'),
    app = express(),
    load = require('express-load'),
    db = require('./app/mongo/mongoConnection')

process.db = db;

load('routes', {
    cwd: 'app'
}).then('mongo').into(app)

//db.connect('mongodb://localhost:27017/cookbook', function(err) {
db.connect('mongodb://heroku_cmbkjpkr:q7i1u0lhd9n6m542b6g9igj8jc@ds145997.mlab.com:45997/heroku_cmbkjpkr', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        app.listen(3000, function() {
            console.log('Here we go...')
        })
    }
})
