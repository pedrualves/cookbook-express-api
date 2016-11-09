'use strict';

let express = require('express'),
    app = express(),
    load = require('express-load'),
    db = require('./app/mongo/mongoConnection'),
    url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/cookbook',
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

load('routes', {
    cwd: 'app'
}).then('mongo').then('model').into(app)

process.db = db;

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
