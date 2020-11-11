---
title: "pg_restore: error: could not read from input file: end of file"
---

Se você tiver esse problema quando estiver tentando importar o `dump` lá do S3, é muito possível que você não tenha liberado as permissões para o arquivo. Basta entrar no painel do S3, selecionar o arquivo e então na parte das permissões, deixar como público.
