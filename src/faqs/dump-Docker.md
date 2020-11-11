---
title: "Como rodar o dump no Docker? O comando `psql` não existe"
---

Existem várias formas de rodar o comando, o mais simples e indicado é:

```sh
cat strapi.sql | docker exec -i NOME_DO_SEU_CONTAINER psql -U SEU_USUARIO -d SUA_DATABASE
```

---

### Como exportar a base localmente com o Docker

Esse comando irá exportar a base de dados para a sua máquina com o seguinte formato: `DUMP_DIA-MES-ANO_HORA_MINUTO_SEGUNDO`, por exemplo, DUMP_06-10-2020_09_27_44.

```sh
docker exec -i NOME_DO_SEU_CONTAINER pg_dump --username SEU_USUARIO --password SUA_DATABASE > DUMP*`date +%d-%m-%Y"_"%H_%M_%S`.sql
```
