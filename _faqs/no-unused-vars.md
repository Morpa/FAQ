---
title: "Estou recebendo `no-unused-vars` em coisas do TypeScript"
---

Isso é muito possivelmente um conflito das versões do `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` e o `typescript`.

Verifique as versões e mantenha sempre na versão major delas, ou seja, `4.x`.

Caso continue dando erro, remova o `node_modules`, reinstale tudo e reinicie o servidor de TypeScript do VS Code.

Para reiniciar o servidor, basta pressionar `ctrl+shift+P` (cmd no Mac) e buscar por `restart TypeScript server`.
