---
title: "Cannot find module 'prettier' / Cannot find module 'jsdom' (insira qualquer outro aqui)"
---

Sempre que tiver um erro dizendo `cannot find module` significa que você não tem o pacote que está tentando importar. Verifique se o nome está escrito certo e caso esteja tudo certo, verifique se está de fato instalado, caso contrário, é só instalar com:

```sh
# caso seja uma dependência de desenvolvimento
yarn add -D <nome_modulo>

# caso seja uma dependência do projeto
yarn add <nome_modulo>
```

---

### Command not found: eslint

Se você tentar rodar o `eslint` diretamente pelo terminal e der esse erro, isso indica que você não tem o `eslint` instalado globalmente no seu sistema. Você tem duas opções:

1. Instalar globalmente com `npm install -g eslint` ou `yarn global add eslint`.
2. Rodar através do projeto com `yarn lint` (verifique se possui o comando no `package.json`) ou com `yarn eslint`.


---
