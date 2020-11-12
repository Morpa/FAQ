---
title: "Command not found: eslint"
---

Se você tentar rodar o `eslint` diretamente pelo terminal e der esse erro, isso indica que você não tem o `eslint` instalado globalmente no seu sistema. Você tem duas opções:

1. Instalar globalmente com `npm install -g eslint` ou `yarn global add eslint`.
2. Rodar através do projeto com `yarn lint` (verifique se possui o comando no `package.json`) ou com `yarn eslint`.
