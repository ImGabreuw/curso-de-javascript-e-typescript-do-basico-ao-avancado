const paragrafos = document.querySelector(".paragrafos");
const ps = document.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backgroundBody;
  p.style.color = "white";
}