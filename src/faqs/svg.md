---
title: "Meu SVG não está pegando no Cloudinary."
---

A Cloudinary aparentemente tem alguns problemas em interpretar o SVG se ele estiver sem o cabeçalho completo, basta adicionar a seguinte linha no início do arquivo SVG:

```xml
<?xml version="1.0" encoding="utf-8"?>
```
