# Webpack (Boilerplate)

> ## **Webpack**

### **Configuração inicial**

1. Iniciar um projeto Node:

    ```sh
    $ npm init -y
    ```

2. Instalar os pacotes necessários (*babel* e *webpack*)

    ```sh
    $ npm i --save-dev @babel/preset-env @babel/cli @babel/core babel-loader webpack webpack-cli regenerator-runtime core-js@2
    ```

    > Comando `npm i` é um atalho para `npm install`.

3. Criar o arquivo de configuração do *webpack*:

    > **IMPORTANTE**: o nome do arquivo precisa ser igual a `webpack.config.js` e deve estar no diretório raiz do projeto.

    1. Importar o módulo `path` do CommonJS:

        ```js
        const path = require('path');
        ```

    2. Exportar o objeto de configuração do *webpack*:

        ```js
        module.exports = {
          // ...
        }
        ```

        **Propriedades do objeto de configuração do *webpack**:

        * `mode`: especificar o modo de trabalho: `development` ou `production`

        * `entry`: especificar o caminho até o arquivo de entrada da aplicação

          > **OBS**: utilizar o **caminho relativo**  ao informar o arquivo de 
          
        * `output`:

          * `path`: caminho até o diretório que será enviado o arquivo de saída (arquivo transpilado)

          * `filename`: nome do arquivo de saída

        * `devtool`: especificar a ferramenta de desenvolvimento utilizada para fazer o mapeamento entre o código fonte e o arquivo transpilado (para depuração do código,)

        * `module`
        
          * `rules`: especificar as regras do módulo

            * `exclude`: especificar diretórios e arquivos que devem ser ignorados pelo *webpack*

            * `test`: especificar os arquivos/tipo do arquivo que serão transpilados

            * `use`:

              * `loader`: especificar o *loader* que deve ser usado pelo *webpack*

              * `options`:

                * `presets`: especificar o(s) *presets*

    3. Definir o `mode`:

        ```js
        module.exports = {
          mode: "production",
          // ...
        }
        ```

    4. Criar o arquivo de entrada da aplicação (*entry*) no diretório `src/`.

        > No diretório `src/` é armazena o código fonte da aplicação.

    5. Definir o `entry`:

        ```js
        module.exports = {
          entry: "./src/index.js",
          // ...
        }
        ```

    6. Definir as propriedades `path` e `filename` do objeto `output`:

        ```js
        module.exports = {
          output: {
            path: path.resolve(__dirname, "public", "assets", "js"),
            filename: "bundle.js",
          },
          // ...
        }
        ```

        > `__dirname` é uma variável global que armazena o *caminho absoluto* até o diretório raiz do projeto.

    7. Definir o `devtool`:

        ```js
        module.exports = {
          devtool: "source-map",
          // ...
        };
        ```

    8. Definir as `rules` do `module`:

        ```js
        module.exports = {
          module: {
            rules: [
              {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/env"],
                  },
                },
              },
            ],
          },
          // ...
        };
        ```

    9. Após ter realizado todas as etapas anteriores, o arquivo `webpack.config.js` deve estar da seguinte forma:

        ```js
        const path = require("path");

        module.exports = {
          mode: "production",
          entry: "./src/index.js",
          output: {
            path: path.resolve(__dirname, "public", "assets", "js"),
            filename: "bundle.js",
          },
          module: {
            rules: [
              {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/env"],
                  },
                },
              },
            ],
          },
          devtool: "source-map",
        };
        ```

---

> ## **NPM**

### **Comandos**

* `npm install`: instalar todas as pendências especificadas no arquivo `package.json`