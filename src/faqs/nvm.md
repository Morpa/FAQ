---
title: "Meu NVM sempre para de funcionar quando reinicio o terminal"
---

Se você está usando o WSL e está tendo problema com o NVM, basta adicionar a linha:

```sh
source ~/.zsh-nvm/zsh-nvm.plugin.zsh
```

No seu arquivo `.zshrc` e então reiniciar seu terminal, prontinho, estará funcionando normalmente.
