# Criando um app com o React

> ## **`create-react-app`**

### **Definição**

É um *CLI* (Command Line Interface) para facilitar a criação de aplicação com React.

### **Sintaxe**

```shell
$ npx create-react-app [nome do projeto]
```

### **Exemplo**

```shell
$ npx create-react-app .
```

> O comando acima criará um projeto React com o nome do diretório atual (`.`).

> ## **Scripts gerados pelo `create-react-app`**

### **`start`**

Iniciar a aplicação React.

### **`eject`**

Por padrão, os arquivos de configuração (do *babel*, *webpack*, etc) não são expostos no diretório do projeto, então com o comando `$ npm run eject` esses arquivos de configuração são ejetados para o diretório raiz do projeto.
