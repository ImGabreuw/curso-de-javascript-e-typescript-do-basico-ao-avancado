export function criarErro(): never {
  throw new Error('Erro');
}

criarErro();
