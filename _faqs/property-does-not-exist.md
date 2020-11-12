---
title: "Property 'propriedade_aqui' does not exist on type 'propriedade'"
---

Esse é um erro super comum do TypeScript, verifique na criação do seu Type Alias se a propriedade foi de fato criada, normalmente você esqueceu de criar. Segue exemplo:

```ts

type AuthorProps = {
  name: string
  description: string
}

// Property 'age' does not exist on type 'AuthorProps'.
const renderAuthor = ({ name, description, age }: AuthorProps) => (...)

```
