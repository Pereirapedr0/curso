// const h1 = document.querySelector('.container h1');
// const date = new Date();

// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;

//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//             return diaSemanaTexto;
//     }
// }

// function getNomeMes(numeroMes) {
//     let numeroMesTexto;
//     switch (numeroMes) {
//         case 0:
//             numeroMesTexto = 'Janeiro';
//             return numeroMesTexto;

//         case 1:
//             numeroMesTexto = 'Fevereiro';
//             return numeroMesTexto;
//         case 2:
//             numeroMesTexto = 'Março';
//             return numeroMesTexto;
//         case 3:
//             numeroMesTexto = 'Abril';
//             return numeroMesTexto;
//         case 4:
//             numeroMesTexto = 'Maio';
//             return numeroMesTexto;
//         case 5:
//             numeroMesTexto = 'Junho';
//             return numeroMesTexto;
//         case 6:
//             numeroMesTexto = 'Julho';
//             return numeroMesTexto;
//         case 7:
//             numeroMesTexto = 'Agosto';
//             return numeroMesTexto;
//         case 8:
//             numeroMesTexto = 'Setembro';
//             return numeroMesTexto;
//         case 9:
//             numeroMesTexto = 'Outubro';
//             return numeroMesTexto;
//         case 10:
//             numeroMesTexto = 'Novembro';
//             return numeroMesTexto;
//         case 11:
//             numeroMesTexto = 'Dezembro';
//             return numeroMesTexto;
//         default:
//             numeroMesTexto = '';
//             return numeroMesTexto;
//     }
// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();
//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);
//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}`+
//         `${zeroAEsquerda (data.getHours())}:${zeroAEsquerda( data.getMinutes()) }
//     }`
// )
// }
// h1.innerHTML = criaData(date);


const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = data.toLocaleString('pt-BR', opcoes);