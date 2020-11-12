---
title: "Esqueci meu usuário/senha de Admin do Strapi, como faço?"
---

Verifique a versão, se a versão for `3.2.4` ou acima, você pode utilizar o [comando da cli](https://strapi.io/documentation/v3.x/cli/CLI.html#strapi-admin-reset-user-password) para resetar a senha, com:

```sh
strapi admin:reset-user-password --email=chef@strapi.io --password=Gourmet1234
```

Caso seja uma versão abaixo, siga os seguintes passos abaixo:

Se você lembrar o email cadastrado, recomendo utilizar a opção "Esqueceu sua senha" e você irá receber na sua caixa de `Spam` uma mensagem para refazer a senha (funciona mesmo localmente!)

Se você não lembrar o email, você pode deletar a tabela `strapi_administrators` e a próxima vez que tenta acessar o sistema, ele vai pedir para criar o usuário.

Para deletar, basta rodar `truncate strapi_administrators;` dentro do Postgres no seu banco.
