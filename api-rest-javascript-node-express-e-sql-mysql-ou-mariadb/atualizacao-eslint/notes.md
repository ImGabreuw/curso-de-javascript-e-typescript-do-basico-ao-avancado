# Atualização Eslint

A configuração de "eslint.autoFixOnSave" no VSCode não funciona mais para que o eslint faça correção do código automaticamente.

Utilize a seguinte configuração ao invés de "eslint.autoFixOnSave":

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
},
```
