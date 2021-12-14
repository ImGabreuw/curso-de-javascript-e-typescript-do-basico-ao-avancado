function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;

    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;

    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;

    case 3:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;

    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;

    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;

    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;

    default:
      return diaSemanaTexto = "Inválido";
  }
}

const data = new Date();

const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemanaTexto);