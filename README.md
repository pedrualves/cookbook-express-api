# Simple and rustic example of nodejs using express framework.

Look at demo here: [http://cookbook-express-api.herokuapp.com](http://cookbook-express-api.herokuapp.com)

## cookbook-express-api

### get list recipes

```javascript
method: GET

endpoint: https://cookbook-express-api.herokuapp.com/api/recipes/
          https://cookbook-express-api.herokuapp.com/api/recipes/:page?/:quantity?

return: {
          500: "internal error",
          200: "list of recipes with id and name"
        }
```

### get by recipe by id

```javascript
method: GET

endpoint: https://cookbook-express-api.herokuapp.com/api/recipe/:id

return: {
          500: "internal error",
          200: "the requested recipe of id",
          204: "recipe not found"
        }
```

### insert new recipe

```javascript
method: POST

endpoint: https://cookbook-express-api.herokuapp.com/api/recipe/

sample payload: {
  "nome": "Brownie de Chocolate com Gengibre",
  "secao": [
    {
      "nome": " Ingredientes",
      "conteudo": [
        "50 g farinha de milho fina",
        "10 g de cacau em pó"
      ]
    },
    {
      "nome": " Modo de Preparo",
      "conteudo": [
        "1 - Coloque numa tigela a farinha de milho fina e o cacau em pó.",
        "2 - Misture e reserve."
      ]
    },
    {
      "nome": " Outras informações",
      "conteudo": [
        "Rendimento: 20 porções "
      ]
    }
  ]
}

return: {
          500: "internal error",
          200: {inserted: true},
          204: {inserted: false}
        }
```

### find and modify recipe

```javascript
method: PUT

endpoit: https://cookbook-express-api.herokuapp.com/api/recipe

sample payload: {
    "_id": "5744eff20ca7832b5c745abf",
    "nome": "abc2",
    "secao": [{
        "nome": " Ingredientes",
        "conteudo": [
            "123"
        ]
    }, {
        "nome": " Modo de Preparo",
        "conteudo": [
            "456"
        ]
    }, {
        "nome": " Outras informações",
        "conteudo": [
            "789"
        ]
    }]
}

return: {
          500: "internal error",
          200: {updated: true},
          204: {updated: false}
        }
```

### find and REMOVE recipe

```javascript
method: DELETE

endpoit: https://cookbook-express-api.herokuapp.com/api/recipe/:id

return: {
          500: "internal error",
          200: {removed: true},
          204: {removed: false}
        }
```



