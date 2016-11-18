'use strict';

const Mongo = require('mongodb'),
    MongoClient = Mongo.MongoClient,
    state = {
        db: null,
    }

exports.connect = function(url, done) {
    if (state.db) return done()

    MongoClient.connect(url, function(err, db) {
        if (err) return done(err)
        state.db = db
        done()
    })
}

exports.get = function() {
    return state.db
}

exports.ObjectID = function() {
    return require('mongodb').ObjectID
}

exports.close = function(done) {
    if (state.db) {
        state.db.close(function(err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}
