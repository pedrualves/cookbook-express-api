'use strict';

let express = require('express'),
    app = express(),
    load = require('express-load'),
    db = require('./app/mongo/mongoConnection')

process.db = db;

load('routes', {
    cwd: 'app'
}).then('mongo').into(app)

db.connect('mongodb://localhost:27017/cookbook', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        app.listen(3000, function() {
            console.log('Here we go...')
        })
    }
})
