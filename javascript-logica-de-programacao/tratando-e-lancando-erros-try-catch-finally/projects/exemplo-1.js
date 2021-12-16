const lancarErro = () => {
  throw new Error("Erro!!");
}

try {
  console.log("Abrindo arquivo ...");
  console.log("Manipulando arquivo ...");
  
  lancarErro();
} catch (err) {
  console.log("Tratando erro ...")
} finally {
  console.log("Fechando arquivo ...")
}