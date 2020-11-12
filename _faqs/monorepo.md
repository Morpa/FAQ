---
title: "Estou usando tanto a API como o Client no mesmo repositório, como subo no Heroku?"
---

Para subir somente o backend para o Heroku, basta rodar o comando:

```sh
git subtree push --prefix <pasta-backend> heroku master

# exemplo, se a pasta for /api
git subtree push --prefix api heroku master
```
