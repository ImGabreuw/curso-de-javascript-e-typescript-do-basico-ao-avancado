# Upload de arquivos

> ## **`multer`**

### **Definição**

O módulo `multer` é um *middleware* para manipular com arquivos no Node.js (*multipart/form-data*).

### **Configuração**

1. Instalar o pacote `multer` com NPM:

    ```shell
    $ npm i multer
    ```

2. Importar o módulo:

    ```js
    import multer from "multer";
    ```

3. Definir o objeto de configuração do `multer` para salver arquivos em disco:


    ```js
    {
      storage: multer.diskStorage({
        [função para salvar o arquivo],
        [função para normalizar o nome do arquivo]
      })
    }
    ```

### **Exemplo**

```js
import multer from "multer";
import { extname, resolve } from "path";

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, "..", ",,", "upload"));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${aleatorio}${extname(file.originalname)}`);
    },
  }),
};

```
