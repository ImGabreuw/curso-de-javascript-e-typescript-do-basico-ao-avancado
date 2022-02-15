# Tipo void

> ## **Definição**

Indicar que uma função não tem retorno.

> ## **Exemplo**

```ts
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
```

```ts
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};
```
