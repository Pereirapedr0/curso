const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const corBody = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = corBody;
  p.style.color = 'white';
} 