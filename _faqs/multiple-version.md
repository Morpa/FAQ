---
title: "Warning: 'multiple version of 'foo' found' ao executar yarn develop --watch-admin"
---

Ao rodar o Strapi em modo development com a flag `--watch-admin` e se deparar com algum Warning como: `multiple version of 'foo' found`, ou até mesmo notar que o host `localhost:8000/admin` não está atualizado com suas modificações, ou ainda, estiver apresentando um loading infinito, é provável que que a porta `8000` já esteja executando alguma instância do Strapi em background e que não foi encerrada devidamente.

Para verificar processos rodando na porta `8000` execute no terminal:

```bash
lsof -i 8000
```

Verifique se o output exibe alguma entrada semelhante a esta abaixo:

```bash
COMMAND     PID     USER   FD   TYPE    DEVICE   SIZE/OFF  NODE NAME
node        3182    foo    cwd   IPV4   8,17     4096      TCP  localhost:8000(LISTEN)
```

Mate o(s) processo(s) que estiverem executando nessa porta. Exemplo:

```bash
kill -9 3182
```

Por fim, remova as pastas `.cache` e `build` do projeto, execute o comando `yarn build --clean` e execute novamente o comando `yarn develop --watch-admin`.
