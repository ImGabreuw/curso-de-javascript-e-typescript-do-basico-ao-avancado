function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Luiz', 'Otávio');

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
