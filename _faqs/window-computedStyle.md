---
title: "Not implemented: window.computedStyle ao rodar os testes"
---

Esse erro acontece quando você tenta rodar métodos do `jest-dom` e não o tem configurado. Para configurar, você precisa ter um arquivo [.jest/setup.ts](https://github.com/React-Avancado/boilerplate/blob/master/.jest/setup.ts#L1) e então chamar o setup na configuração do [jest.config.js](https://github.com/React-Avancado/boilerplate/blob/master/jest.config.js#L6).
