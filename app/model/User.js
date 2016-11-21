'use strict';

function User() {
    this._users = process.db.get().collection('users')
    this._ObjectID = process.db.ObjectID()
}

User.prototype.insert = function(user, cb) {
    if ((!!user.name && !!user.email && !!user.password) || (!!user.github) || (!!user.facebook)) {
        this._users.insertOne({
            name: user.name,
            email: user.email,
            password: user.password,
            facebook: user.facebook,
            github: user.github,
            google: user.google,
            linkedin: user.linkedin,
            twitter: user.twitter
        }, (err, doc) => {
            this._users.close;
            cb(err, doc)
        })
    } else {
        cb("invalid object", null)
    }
}

User.prototype.login = function(user, cb) {

}

User.prototype.getToken = function(user, cb) {

}

User.prototype.update = function(user, cb) {

}

User.prototype.newPassword = function(user, cb) {

}

module.exports = function() {
    return User
}
