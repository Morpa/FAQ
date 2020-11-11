---
title: "Meu `test:watch` não está funcionando, ele roda os testes e acaba"
---

Nosso comando no boilerplate está utilizando o `yarn` e nele nós podemos passar simplesmente como:

```sh
yarn test --watch
```

Mas no `npm` nós precisamos passar dois traços `--` para passar o comando abaixo e de fato funcionar, ou seja, o comando precisa ser:

```sh
npm run test -- --watch
```
