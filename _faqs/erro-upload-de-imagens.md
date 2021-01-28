---
title: Quando tento popular os games ocorre um erro na tentativa de upload das imagens
---

Se você rodou o comando para popular o banco de dados com os games (comando curl), já estava com a rota de upload e populate liberada e mesmo assim as imagens deram erro de upload, muito provavelmente dentro da sua pasta "public" no projeto do strapi está faltando a pasta "uploads". Crie essa pasta manualmente, delete os dados que vieram do primeiro scrap e rode o comando de populate de novo.
