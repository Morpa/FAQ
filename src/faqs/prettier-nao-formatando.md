---
title: "Meu prettier não está formatando o código"
---

1. Verifique se você já instalou o pacote do `prettier`, como no [boilerplate](https://github.com/React-Avancado/boilerplate/blob/master/package.json#L59).

Caso não tenha, instale com `yarn add -D prettier`, reinicie o editor e tente novamente.

2. Verifique se o teu VS Code está configurado para formatar ao salvar. Você precisa ter um arquivo *na raiz do projeto* como [.vscode/settings.json](https://github.com/React-Avancado/boilerplate/blob/master/.vscode/settings.json), segue abaixo o código:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
