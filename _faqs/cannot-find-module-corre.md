---
title: "Cannot find module 'core-js/modules/es.array.iterator'"
---

Se você estiver tendo esse erro é possível que está rodando com o `npm` e portanto ele não tem polyfill para certos métodos do es6 e quebra. Normalmente mudar para utilizar o `yarn` já resolve o problema.

Outra maneira é instalar o pacote do `core-js` com:

```sh
npm install -D core-js
```
