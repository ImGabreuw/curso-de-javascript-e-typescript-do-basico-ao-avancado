# Separando os componentes

> ## Pacote `prop-types`

### **Definição**

Biblioteca para realizar a validação do propriedades de um componente React.

### **Configuração**

1. Instalar o pacote `prop-types` com NPM:

    ```shell
    $ npm i prop-types
    ```

2. Importá-lo no arquivo do componente:

    ```js
    import PropTypes from 'prop-types';
    ```

3. Definir os tipos de cada propriedade do componente:

    ```js
    Form.defaultProps = {
      // Definir o valor padrão de um propriedade caso ela não seja obrigatório (.isRequired)
    }

    Form.propTypes = {
      [nome da propriedade]: PropTypes.[tipo da propriedade].[configurações adicionais]
    }
    ```

    ```js
    // Form/index.js

    Form.defaultProps = {
      novaTarefa: "Valor padrão",
    }

    Form.propTypes = {
      handleChange: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired,
      novaTarefa: PropTypes.string,
    }
    ```
