# Funções fábrica (Factory Functions)

### **Definição**

Tem a mesma função das funções construtoras (*constructor function*), que é instanciar um objeto.

### **Exemplo**

```js
function criarPessoa(nome, sobrenome, altura, peso) {
  return { 
    nome, 
    sobrenome,
    altura,
    peso,

    falar(assunto) {
      return `${this.nome} está falando sobre ${assunto}`;
    },

    imc() {
      const imc = this.peso / (this.altura ** 2);

      return imc.toFixed();
    }
  }
}

const pessoa = criarPessoa("Luiz", "Otávio", 1.80, 80);

console.log(pessoa.falar("JS"));
console.log(pessoa.imc());
```

---

> ## Getter

### **Definição**

É uma forma de executar uma função com a anotação de atributo de um objeto. ("converter um função em atributo")

### **Exemplo**

```js
function criarPessoa(nome, sobrenome, altura, peso) {
  return { 
    nome, 
    sobrenome,
    altura,
    peso,

    falar(assunto) {
      return `${this.nome} está falando sobre ${assunto}`;
    },

    get imc() {
      const imc = this.peso / (this.altura ** 2);

      return imc.toFixed(2);
    }
  }
}

const pessoa = criarPessoa("Luiz", "Otávio", 1.80, 80);

console.log(pessoa.falar("JS"));
console.log(pessoa.imc);

console.log(pessoa.imc()); // Erro: "pessoa.imc" is not a function
```

> ## Setter

### **Definição**

É uma forma de definir o valor de um atributo a partir de uma função.

### **Exemplo**

```js
function criarPessoa(nome, sobrenome, altura, peso) {
  return { 
    nome, 
    sobrenome,
    altura,
    peso,

    falar(assunto = "NADA") {
      return `${this.nome} está falando sobre ${assunto}`;
    },

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");

      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    get imc() {
      const imc = this.peso / (this.altura ** 2);

      return imc.toFixed(2);
    }
  }
}

const pessoa = criarPessoa("Luiz", "Otávio", 1.80, 80);

console.log(pessoa.falar("JS")); // Luiz está falando sobre JS
console.log(pessoa.imc); // 24.69
console.log(pessoa.nomeCompleto); // Luiz Otávio

pessoa.nomeCompleto = "Maria Oliveira Silva"; 
console.log(pessoa.nome); // Maria
console.log(pessoa.sobrenome); // Oliveira Silva
console.log(pessoa.falar()); // Maria está falando sobre NADA
```