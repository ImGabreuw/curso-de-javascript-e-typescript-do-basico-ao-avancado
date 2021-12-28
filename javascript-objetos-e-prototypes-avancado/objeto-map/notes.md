# Objeto Map()

### **Definição**

É a estrutura de dados `map` que armazena os valores no formato **chave-valor**.

A ordem de inserção dos elementos é mantida no `map`.

### **Principais métodos**

* `set()`

  * **Função**: inserir um novo elemento

  * **Sintaxe**:

    ```js
    .set([chave], [valor])
    ```

* `get()`

  * **Função**: obter um elemento a partir de uma chave

  * **Sintaxe**:

    ```js
    .get([chave])
    ```

  * **OBS**: caso a chave não existe é retornado `undefined`

* `delete()`

  * **Função**: remover um elemento pela chave

  * **Sintaxe**:

    ```js
    .delete([chave])
    ```

### **Exemplo**

```js
const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);

/*
Map(3) {
  3 => { id: 3, nome: 'Luiz' }, 
  2 => { id: 2, nome: 'Maria' },
  1 => { id: 1, nome: 'Helena' }
}
*/
```