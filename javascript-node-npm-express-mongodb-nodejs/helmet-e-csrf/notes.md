# Helmet e CSRF

> ## **Express Helmet**

### **Definição**

É uma biblioteca do Express responsáveis por setar alguns headers nas respostas HTTP.

### **Configuração**

1. Instalar o pacote `helmet` com NPM:

   ```sh
   $ npm i helmet
   ```

2. Importar `helmet` no arquivo de entrada da aplicação:

   ```js
   const helmet = require("helmet");
   ```

3. Adicionar o `helmet` no contexto do _Express_:

   ```js
   app.use(helmet());
   ```

> ## **CSRF**

### **Definição**

**CSRF**: Cross-site Request Forgery

É um tipo de ataque de websites maliciosos que consiste no envio de solicitações desatualizadas de um usuário no qual o website confia.

![](https://miro.medium.com/max/700/0*VJgOKYMq_6fo4LC6.png)

### **Configuração**

1. Importar o pacote `csurf` com NPM:

   ```sh
   $ npm i csurf
   ```

2. Importar `csurf` no arquivo de entrada da aplicação:

   ```js
   const csrf = require("csurf");
   ```

3. Adicionar o _csurf_ no contexto do _Express_:

   ```js
   app.use(csrf());

   app.use(routes);
   ```

   > **IMPORTANTE**: declarar `app.use(csrf());` antes de definir as rotas (`app.use(routes);`)

4. Criar _middlewares_ para tratar o _Token CSRF_:

   ```js
   exports.checkCsrfError = (err, req, res, next) => {
     if (err && "EBADCSRFTOKEN" === err.code) {
       return res.render("404");
     }
   };

   exports.csrfMiddleware = (req, res, next) => {
     res.locals.csrfToken = req.csrfToken();
     next();
   };
   ```

5. Adicionar os _middlewares_ criado na etapa anterior no contexto do _Express_:

   ```js
   app.use(csrf());
   app.use(checkCsrfError);
   app.use(csrfMiddleware);

   app.use(routes);
   ```

6. Para qualquer formulário da aplicação é necessário adicionar uma tag oculta nele:

   ```html
   <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
   ```

   ```html
   <form action="/" method="post">
     <label>Cliente</label>
     <input type="text" name="cliente" />
     <button>Submit</button>
   </form>
   ```
