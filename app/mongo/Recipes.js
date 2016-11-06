'use strict';

function Recipes() {
    this._recipes = process.db.get().collection('recipes')
}

Recipes.prototype.findOne = function(cb) {
    this._recipes.find().limit(1).next((err, docs) => {
        this._recipes.close;
        cb(err,docs)
    })
}

module.exports = function() {
    return Recipes
}
