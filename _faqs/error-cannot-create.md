---
title: "Error Cannot create '/usr/local/bin/create-next-app' due to insufficient permissions"
---

É possível que você esteja tentando rodar o comando em alguma pasta sem permissão ou até mesmo que tenha instalado globalmente e para o usuário em questão você não está tendo permissão. Recomendo que remova qualquer traço do comando global, com:

```sh
# tente remover via npm primeiro
npm uninstall -g create-next-app

# ou então remova direto a pasta
# primeiro verifique onde está o comando com
which create-next-app

# com a pasta retornada, use o comando
rm -rf <pasta> # por padrão, costuma ser /usr/bin/create-next-app
```

Após removido, utilize o comando através do `npx` para não necessitar instalar nada na máquina.

```sh
npx create-next-app nome-do-app
