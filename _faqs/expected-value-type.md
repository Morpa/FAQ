---
title: "Expected a value of type \"ENUM_COMPONENTPAGESOCIALLINKS_TITLE\" but received: \"Dribble\""
---

Verifique o seu arquivo de [social-links](https://github.com/React-Avancado/landing-page-api/blob/master/components/page/social-links.json#L11-L17), os nomes precisam ser exatamente iguais ao do Enum.

Exemplo, se o erro for no `Dribble`, é porque ele precisa de 3 `b`, o certo é `Dribbble`. O mesmo deve ser tratado para `Github` sem `H` maiusculo e por aí vai.

Outra situação possivél é caso tenha feito o upload dos dados no Strapi do `dump` via linha de commando `sql` é possível que o select não tenha fixado e ficou `Choose here`. Só precisa colocar o select correto e pronto.
