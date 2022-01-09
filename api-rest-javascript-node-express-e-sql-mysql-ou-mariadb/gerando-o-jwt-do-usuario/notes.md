# Gerando o JWT do usuário

> ## **JWT**

### **Configuração**

1. Instalar o pacote `jsonwebtoken` com NPM:

    ```shell
    $ npm i jsonwebtoken
    ```

2. Definir as seguintes variáveis de ambiente no arquivo `.env` (recomendado):

    ```properties
    TOKEN_SECRET=
    TOKEN_EXPIRATION=
    ```

3. Importar o `jsonwebtoken` no arquivo que será utilizado esse pacote:

    ```js
    import jwt from "jsonwebtoken";
    ```

### **Criação do token**

* **Sintaxe**

  ```js
  jwt.sign(
    [payload do token],
    [secret]
    [objeto de configuração]
  )
  ```

  * `[objeto de configuração]`: informar o tempo de expiração do token, por exemplo

* **Exemplo**

  ```js
  const token = jwt.sign(
    { id, email },
    process.env.TOKEN_SECRET,
    { expiresIn: process.env.TOKEN_EXPIRATION }
  );
  ```
