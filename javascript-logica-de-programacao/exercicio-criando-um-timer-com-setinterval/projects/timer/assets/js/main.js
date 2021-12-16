function relogio() {

  function criarHoraAPartirDosSegundos(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT"
    });
  }

  const relogio = document.querySelector(".relogio");
  
  let segundos = 0;
  let timer;

  function iniciarRelogio() {
    timer = setInterval(
      () => {
        segundos++
        relogio.innerHTML = criarHoraAPartirDosSegundos(segundos);
      },
      1000
    )

    return segundos;
  }

  document.addEventListener("click", event => {
    const elemento = event.target;

    clearInterval(timer);

    if (elemento.classList.contains("zerar")) {
      relogio.classList.remove("pausado");
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }

    if (elemento.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      iniciarRelogio();
    }

    if (elemento.classList.contains("pausar")) {
      relogio.classList.add("pausado");
    }
  })

}

relogio();
