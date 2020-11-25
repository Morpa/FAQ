---
title: "Rating da GoG sempre vindo null"
---

A GoG modificou novamente a forma deles trabalharem com o rating e agora, no primeiro loading, eles identificam sua região e somente na segunda vez que você olha a página que eles mostram o rating baseado na sua região.

Para que não tenhamos problemas nessa parte, basta definir para que o rating seja sempre por padrão `BR0` ou qualquer valor que você desejar, baseado no seu `enum` de rating. E aí o código do service ficará simplificado [da seguinte maneira](https://github.com/Won-Games/api/commit/f13fa2f3b463a90523574396867739a3cc2b00a6).

A decisão de não pegar o valor é puramente para que não tenhamos necessidade de revisitar esse pedaço e pois o objetivo do curso não é ser um crawler 100% e sim só ter uma API com dados mais realistas. Sinta-se a vontade para criar uma solução se achar necessário.
