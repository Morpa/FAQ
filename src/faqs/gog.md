---
title: "rating must be one of the following values: FREE, pegi3, pegi7, pegi12, pegi16, pegi18 | GoG não tá retornando os ratings"
---

Aparentemente a GoG mudou essa parte do rating para verificar de acordo com o país. Para o Brasil eles estão usando:

https://items.gog.com/brazilian_ratings/L.png
https://items.gog.com/brazilian_ratings/10.png
https://items.gog.com/brazilian_ratings/12.png
https://items.gog.com/brazilian_ratings/14.png
https://items.gog.com/brazilian_ratings/16.png
https://items.gog.com/brazilian_ratings/18.png

O ideal é mudar o `enum` do `rating` para ficar de acordo com os novos dados. Segue o [commit da mudança](https://github.com/Won-Games/api/commit/8867654658b966c90fa3635f547d3dfdb19863c8).
