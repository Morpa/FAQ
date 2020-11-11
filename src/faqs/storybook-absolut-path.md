---
title: "Como fazer o Storybook funcionar com caminho absoluto"
---

Para importar o componente direto como `components/Logo` ao invés de `../src/components/Logo` basta editar o seu arquivo `main.js` de configuração do Storybook para incluir as seguintes linhas:

```js
webpackFinal: (config) => {
  config.resolve.modules.push(`${process.cwd()}/src`)
  return config
}
```

Você pode ver o [arquivo completo aqui](https://github.com/React-Avancado/boilerplate/blob/master/.storybook/main.js)
