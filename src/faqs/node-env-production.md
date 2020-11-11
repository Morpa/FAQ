---
title: "O termo 'NODE_ENV=production' não é reconhecido como nome de cmdlet"
---

Esse erro acontece no Windows, pois ele não identifica corretamente as variáveis de ambiente.

A primeira coisa que recomendo é que você utilize o WSL, [aqui eu ensino como configurar tudo em 30min](https://www.youtube.com/watch?v=YcR8pKvjx44&list=PLlAbYrWSYTiOpefWtd6uvwgKT1R-94Zfd).

Mas caso queira continuar usando o Windows, você precisa instalar um pacote chamado `cross-env` com o comando:

```sh
yarn add -D cross-env
```

E depois modificar o seu comando para ficar:

```sh
cross-env NODE_ENV=production yarn build
```
