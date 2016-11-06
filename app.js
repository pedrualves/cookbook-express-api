'use strict';

let express = require('express'),
    app = express(),
    load = require('express-load')

load('routes', {
    cwd: 'app'
}).into(app)

app.listen(3000, function() {
    console.log('Here we go...')
})
