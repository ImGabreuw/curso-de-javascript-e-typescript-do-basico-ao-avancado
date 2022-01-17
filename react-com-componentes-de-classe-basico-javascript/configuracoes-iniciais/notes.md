# Configurações iniciais

> ## **Estrutura do projeto gerado a partir do `create-react-app`**

* `public/`: armazenar os arquivos públicos (estático) do projeto

  * `index.html`: única página HTML do projeto, é nele onde o HTML é injetado pelo React

  * `robots.txt`: configurações de SEO (*Search Engine Optimization*)

* `src/`: armazenar o código fonte do projeto

  * `App.js`: componente da página inicial

  * `App.css`: estilização do componente `App.js`

  * `index.js`: arquivo principal do React, onde todo o código JavaScript é gerado e injeto no arquivo `index.html`

> ## **Componentes no React**

### **Definição**

**Componentes** são elementos da páginas que podem ser reutilizados em outros páginas da aplicação.

Todo componente React precisa importar o módulo `react` (`import React from 'react'`), mesmo se ele não for utilizado no arquivo.

### **Componente sem estado**

**Componente sem estado** é um componente que contém uma função retornando apenas **JSX**.
