# cookbook-express-api

## get list recipes

```javascript
method: GET

endpoint: http://running.com/api/recipes/
          http://running.com/api/recipes/:page?/:quantity?
```


## get by recipe by id

```javascript
method: GET

endpoint: http://running.com/api/recipe/:id
```


## insert new recipe

```javascript
method: POST

endpoint: http://running.com/api/recipe/

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
```
## find and modify recipe

```javascript
method: PUT

endpoit: http://running.com/api/recipe

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

```

## find and REMOVE recipe

```javascript
method: DELETE

endpoit: http://running.com/api/recipe/:id

```
