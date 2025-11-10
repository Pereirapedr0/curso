const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
        relogio.style.color = 'black';
    }, 1000);
}

// iniciar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     iniciaRelogio();
// });
// pausar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     relogio.style.color = 'red';
// });
// zerar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     segundos = 0;
//     relogio.innerHTML = '00:00:00';
//     relogio.style.color = 'black';
// });

document.addEventListener('click', function (event) {
    const elemento = event.target;
    if (elemento.classList.contains('iniciar')) {
        clearInterval(timer);
        iniciaRelogio();
    } else if (elemento.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.style.color = 'red';
    }   else if (elemento.classList.contains('zerar')) {
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
        relogio.style.color = 'black';
    }
});
