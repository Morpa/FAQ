---
title: "Server wasn't able to start properly"
---

Se você fez o Dump e começou a ter esse erro, é muito possível que terá uma linha logo abaixo com algo similar a:

```sh
[2020-07-25T14:16:53.112Z] error error: column "<algum nome aqui>" contains null values
```

Isso acontece pois a estrutura que você montou está com alguma coisa diferente de como eu construí e é por isso que o dump acaba não preenchendo o dado e aí acaba quebrando.

A dica é você comparar seus arquivos com [a api do repositório](https://github.com/React-Avancado/landing-page-api/tree/master/api) e também [os componentes](https://github.com/React-Avancado/landing-page-api/tree/master/components/page), muito possivelmente irá achar o arquivo com o campo diferente.

Ao achar a diferença, as soluções são:

- Substituir o seu arquivo pelo arquivo oficial
- Apagar o banco defeituoso
- Rodar o dump novamente

Ou você também pode verificar se o campo possui `required: true` na model e então remover, isso vai permitir valores `null` no banco e assim o Strapi vai conseguir inicializar e aí basta você preencher esse dado faltante.
