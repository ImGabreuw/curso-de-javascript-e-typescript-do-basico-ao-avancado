document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregarPagina(el);
  }
});

async function carregarPagina(el) {
  try {
    const href = el.getAttribute("href");
    const resposta = await fetch(href);

    if (resposta.status !== 200) {
      throw new Error("ERRO!");
    }

    const html = await resposta.text();
    carregarPagina(html);
  } catch (err) {
    console.error(err);
  }
}

function carregarResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
