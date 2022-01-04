# Express Session e Flash Messages

> ## **Express Session**

### **Definição**

É um *middleware* do *Express* para armazenar dados da sessão no servidor.

O *Express Session* salva apenas o ID da sessão no cookie.

Esses dados são salvos em memória, portanto não é recomendado seu uso em produção.

### **Configuração**

```sh
$ npm i express-session connect-mongo connect-flash
```