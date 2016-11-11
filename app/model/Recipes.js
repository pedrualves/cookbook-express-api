'use strict';

function Recipes() {
    this._recipes = process.db.get().collection('recipes')
    this._ObjectID = process.db.ObjectID()
}

Recipes.prototype.remove = function(_id, cb) {
    if (!!_id) {
        this._recipes.findAndRemove({
            "_id": new this._ObjectID(_id)
        }, [], (err, doc) => {
            this._recipes.close;
            console.log(err, doc);
            cb(err, doc)
        })
    } else {
        cb("invalid id", null)
    }
}

Recipes.prototype.update = function(recipe, cb) {
    if (!!recipe._id && !!recipe.nome && !!recipe.secao) {
        this._recipes.findAndModify({
            "_id": new this._ObjectID(recipe._id)
        }, [], {
            "$set": {
                "nome": recipe.nome,
                "secao": recipe.secao
            }
        }, {
            new: false
        }, (err, doc) => {
            this._recipes.close;
            cb(err, doc)
        })
    } else {
        cb("invalid object", null)
    }
}

Recipes.prototype.insert = function(recipe, cb) {
    if (!!recipe.nome && !!recipe.secao) {
        this._recipes.insertOne({
            nome: recipe.nome,
            secao: recipe.secao
        }, (err, doc) => {
            this._recipes.close;
            cb(err, doc)
        })
    } else {
        cb("invalid object", null)
    }
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
