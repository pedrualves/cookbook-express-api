'use strict';

let express = require('express'),
    app = express(),
    load = require('express-load'),
    db = require('./app/mongo/mongoConnection'),
    url = 'mongodb://localhost:27017/cookbook'

if (process.env.MONGODB_URI) {
    url = MONGODB_URI
}

process.db = db;

load('routes', {
    cwd: 'app'
}).then('mongo').into(app)

db.connect(url, function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        app.listen(process.env.PORT || 3000, function() {
            console.log('Here we go...')
        })
    }
})
