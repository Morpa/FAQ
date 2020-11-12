---
title: "toHaveStyle tá dando erro nos testes"
---

Esse é um [bug já reportado](https://github.com/styled-components/styled-components/issues/3262) que veio em algumas otimização da versão `5.2.x`. Para corrigir esse problema, a solução `atual` está sendo mapear no Jest o uso do bundle de browser que o Styled Components cria. Para isso, edite seu arquivo `jest.config.js` para incluir as seguintes linhas:

```js
moduleNameMapper: {
  '^styled-components':
  '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
}
```

Você pode ver o [arquivo completo aqui](https://github.com/React-Avancado/boilerplate/blob/master/jest.config.js)

**Update**: o pessoal do `styled-components` corrigiu esse bug na versão `5.2.1`, então basta atualizar a versão. Você pode ver as correções feitas no nosso boilerplate [nesse commit](https://github.com/React-Avancado/boilerplate/commit/33aa95775ba0145e4bffc32b1562326b07b4c811)
