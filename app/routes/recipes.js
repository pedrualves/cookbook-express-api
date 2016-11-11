'use strict';

module.exports = function(app) {
    app.delete('/api/recipe/:id', function(req, res) {
        let recipes = new app.model.Recipes(),
            newRecipe = req.body

        recipes.remove(req.params.id, function(err, result) {
            if (err) {
                res.status(500).json(err)
            } else {
                if (result.ok === 1) {
                    res.status(200).json({
                        removed: true
                    })
                } else {
                    res.status(204).json({
                        removed: false
                    })
                }

            }
        })
    })

    app.put('/api/recipe/', function(req, res) {
        let recipes = new app.model.Recipes(),
            newRecipe = req.body

        recipes.update(newRecipe, function(err, result) {
            if (err) {
                res.status(500).json(err)
            } else {
                if (result.ok === 1) {
                    res.status(200).json({
                        updated: true
                    })
                } else {
                    res.status(204).json({
                        updated: false
                    })
                }

            }
        })
    })

    app.post('/api/recipes/', function(req, res) {
        let recipes = new app.model.Recipes(),
            newRecipe = req.body

        recipes.insert(newRecipe, function(err, result) {
            if (err) {
                res.status(500).json(err)
            } else {
                if (result.insertedCount === 1) {
                    res.status(200).json({
                        inserted: true
                    })
                } else {
                    res.status(204).json({
                        inserted: false
                    })
                }

            }
        })
    })

    app.get('/api/recipe/:id?', function(req, res) {
        let recipes = new app.model.Recipes();
        recipes.findById(req.params.id, (err, docs) => {
            if (err) {
                res.status(500).json(err)
            } else {
                if (!!docs) {
                    res.status(200).json(docs)
                } else {
                    res.status(204).json(docs)
                }

            }
        })
    })

    app.get(['/', '/api/recipes/:page?/:qtd?'], function(req, res) {
        let recipes = new app.model.Recipes();
        recipes.pageList(req.params.page, req.params.qtd, (err, docs) => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.status(200).json(docs)
            }
        })
    })
}
