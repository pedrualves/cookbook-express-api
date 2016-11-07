'use strict';

module.exports = function(app) {
    app.get('/api/recipes', function(req, res) {

        let recipes = new app.mongo.Recipes();

        recipes.findOne((err, docs) => {
            if (err) {
                res.status(500).json(err)
            }
            res.status(200).json(docs)
        })
    })

    app.get('/api/recipes/page/:page?/:qtd?', function(req, res) {
        let recipes = new app.mongo.Recipes();
        recipes.pageList(req.params.page, req.params.qtd, (err, docs) => {
            if (err) {
                res.status(500).json(err)
            }
            res.status(200).json(docs)
        })
    })
}
