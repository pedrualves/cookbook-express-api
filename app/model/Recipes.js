'use strict';

function Recipes() {
    this._recipes = process.db.get().collection('recipes')
    this._ObjectID = process.db.ObjectID()
}

Recipes.prototype.findById = function(id, cb) {
    this._recipes.find({
        _id: new this._ObjectID(id)
    }).next((err, doc) => {
        this._recipes.close;
        cb(err, doc)
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
