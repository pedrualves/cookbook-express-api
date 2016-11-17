'use strict';

let express = require('express'),
    app = express(),
    load = require('express-load'),
    db = require('./app/mongo/mongoConnection'),
    url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/cookbook',
    bodyParser = require('body-parser'),
    ua = require('universal-analytics'),
    compression = require('compression')

app.use(compression());

app.use(ua.middleware(process.env.GOOGLE_ANALYTICS, {
    cookieName: '_ga'
}));

app.get(['/', ''], function(req, res) {
    res.status(200).sendFile(__dirname + '/public/index.html')
    req.visitor.pageview("/home").send()
})

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
        console.log('We can\'t cook and to connect to mongo...')
        process.exit(1)
    } else {
        app.listen(process.env.PORT || 3000, function() {
            console.log('Let\'s cook...')
        })
    }
})
