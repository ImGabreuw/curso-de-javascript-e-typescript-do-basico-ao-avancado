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

> ## `connect-mongo`

### **Definição**

É uma biblioteca para salvar os dados de sessão em um banco de dados MongoDB.

O `connect-mongo` é muito utilizado com *Express Session* (dados salvos em memória), pois os dados de sessão são salvos no HD, sendo mais sustentável do que armazená-los na memória em ambiente de produção.

> ## `connect-flash`

### **Definição**

É uma biblioteca para enviar *flash messages*.

> **flash messages** são mensagens salvas em sessão (em memória), dessa forma é perfeito para enviar feedback de erros para o usuário.