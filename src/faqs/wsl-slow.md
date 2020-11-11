---
title: "Estou usando o WSL mas está muito lento!"
---

Verifique se você não está rodando com os arquivos do lado do Windows como: `C:\...`. O indicado é **ter sempre** do lado do WSL, algo como `/development/...`

Verifique se a versão que está rodando é a WSL2, ela é bem rápida que sua versão anterior. Para verificar, abra o Windows Powershell e rode o comando:

```sh
wsl --list --verbose

# deve retornar algo como
  NAME                   STATE           VERSION
* Ubuntu-20.04           Running         2
  docker-desktop         Running         2
  docker-desktop-data    Running         2
```
