---
title: "Invalid hook call ao abrir a página do Storybook"
---

Esse erro costuma ocorrer em repositórios utilizando a versão 17 do React.

Basta verificar se a versão do Storybook está igual ou superior à 6.0.28. Se continuar ocorrendo o erro, passe o parâmetro `--no-dll` no comando do Storybook. Se ainda assim o problema persistir, atualize para a versão de pré-release com `npx sb upgrade --prerelease`

Você pode ver a [issue](https://github.com/storybookjs/storybook/issues/11904) criada para relatar o problema.
