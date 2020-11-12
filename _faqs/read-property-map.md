---
title: "Cannot read property 'map' of undefined"
---

Esse é um erro muito comum no JavaScript e muitas pessoas tem dificuldade, então vamos tentar entender o que está acontecendo.

O erro diz que não consegue usar `map` em `undefined`, isso significa que o array que você está tentando percorrer não existe. Pensemos no seguinte código:


```js

const arr = [1, 2, 3];

// aqui vai funcionar normal, afinal de contas o `arr` existe e é de fato um array
arr.map(n => console.log(n))

// aqui ele vai dizer exatamente "Cannot read property 'map' of undefined"
arrayQueNaoExiste.map(n => console.log(n))
```

Nesses casos, você precisa verificar:

- O array realmente foi criado?
- O nome que está chamando está correto?
- Você está passando essa variável para dentro do componente?

Faça essas verificações, tente ler o código e ir entendendo o processo.
