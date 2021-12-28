const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

const novasPessoas = [];

for (const { id, nome } of pessoas) {
  novasPessoas[id] = nome;
}