---
title: "Error: Validation error - slug must match the following"
---

Se você estiver populando o nosso banco de dados do Strapi e tiver esse erro, é possível que o slug de algum jogo esteja fora dos padrões que o Strapi definiu. Para normalizar tudo, basta editar para que o método de `slugify` remova qualquer símbolo estranho:

```js
slug: slugify(name, { strict: true, lower: true }),
```

Você pode ver o arquivo inteiro e sua linha modificada, [bem aqui](https://github.com/Won-Games/api/blob/master/api/game/services/game.js#L59)
