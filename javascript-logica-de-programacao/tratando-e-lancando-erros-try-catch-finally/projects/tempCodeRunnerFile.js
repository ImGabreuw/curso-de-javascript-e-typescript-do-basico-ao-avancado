function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("É esperado uma instância de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

try {
  const data = retornaHora(new Date());
  // const hora = retornaHora(11);
  console.log(data)
} catch (err) {
  console.log(err);
} finally {
  console.log("Sempre é executado.")
}