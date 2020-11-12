---
title: "Cannot find module 'utils/tests/helpers' from 'src/components/Main/test.tsx'"
---

Muito possivelmente o Jest não está reconhecendo o absolute path, basta editar seu `jest.config.js` para ter essa linha:

```js
modulePaths: ['<rootDir>/src/']
```

Verifique sempre o [arquivo original no boilerplate](https://github.com/React-Avancado/boilerplate/blob/master/jest.config.js)
