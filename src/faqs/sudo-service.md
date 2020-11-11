---
title: "sudo: service: command not found"
---

Se você tentou usar o comando `service` no MacOS é bem possível que você recebeu esse erro, afinal de contas o `service` é um comando para inicializar serviços no Linux.

No Mac você pode usar:

```sh
brew services start <nome-do-serviço>
brew services stop <nome-do-serviço>
brew services restart <nome-do-serviço>
```
