# Instalando o ts-node e Code Runner

> ## **`ts-node`**

### **Definição**

O `ts-node` é um pacote que permite o usuário executar arquivos `.ts` diretamente, sem a necessidade de pré-compilar usando o `tsc`.

### **Configuração**

1. Instalar o pacote `ts-node` como dependência de desenvolvimento:

    ```shell
    $ npm i ts-node -D
    ```

> ## **Integração `ts-node` com Code Runner**

1. Criar um diretório `.vscode/` na raiz do projeto:

2. Adicionar nesse diretório um arquivo `settings.json` e inserir as seguintes configurações:

    ```json
    {
      "code-runner.executorMap": {
        "typescript": "npx ts-node --files",
      }
    }
    ```

    * `npx ts-node`: executar o `ts-node` sem precisar instala-lo no projeto

    * `--files`: indicar ao `ts-node` para utilizar os *includes* e *excludes* do `tsconfig.json`
