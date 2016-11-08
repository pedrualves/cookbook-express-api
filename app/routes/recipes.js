'use strict';

module.exports = function(app) {
    app.get('/api/recipes/:id?', function(req, res) {
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

    app.get(['/', '/api/recipes/page/:page?/:qtd?'], function(req, res) {
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
