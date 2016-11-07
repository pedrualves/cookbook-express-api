'use strict';

function Recipes() {
    this._recipes = process.db.get().collection('recipes')
}

Recipes.prototype.findOne = function(cb) {
    this._recipes.find().limit(1).next((err, docs) => {
        this._recipes.close;
        cb(err, docs)
    })
}

Recipes.prototype.pageList = function(page, qtd, cb) {
    let _page = 1,
        _qtd = 100

    page = parseInt(page)
    qtd = parseInt(qtd)

    if (!!page && Number.isInteger(page) && page > 0) {
        _page = parseInt(page)
    }

    if (!!qtd && Number.isInteger(qtd) && qtd > 0) {
        _qtd = parseInt(qtd)
    }

    this._recipes.find({}, {
        '_id': 0,
        'nome': 1
    }).skip(_page).limit(_qtd).sort({
        'nome': 1
    }).toArray((err, docs) => {
        this._recipes.close;
        cb(err, docs)
    })
}

module.exports = function() {
    return Recipes
}
