---
title: "Something went wrong ao instalar ckdeditor"
---

Se você teve problemas no Strapi depois de instalar o Ckeditor, muito provavelmente é por causa da versão. Na versão nova `23.x`, eles fizeram algumas mudanças que causaram breaking changes com o nosso código. Eu estou investigando o problema, mas para que você tenha tudo funcionando normalmente, faça os seguintes passos:

- Mudar as versões em `plugins/wysiwyg` para as [versões descritas no curso](https://github.com/React-Avancado/landing-page-api/blob/master/plugins/wysiwyg/package.json#L11-L12)
- Rodar o `yarn` dentro da pasta `plugins/wysiwyg` para refazer o `yarn.lock` com as dependências corretas
- Rodar `yarn build --clean` dentro da raiz do projeto para refazer o build
- Rodar `yarn start` ou `yarn develop` para iniciar o projeto

Caso continue quebrando, tente remover o `node_modules` tanto da pasta raiz do projeto quanto de plugins e reinstale novamente.
