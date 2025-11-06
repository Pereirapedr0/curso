const nome = ['Pedro Henrique'];

for (let char of nome) {
    console.log(char);
}

const frutas = ['banana', 'maçã', 'uva', 'pera'];

for (let fruta of frutas) {
    console.log(fruta);
}

const carros = [
    { modelo: 'A4', fabricante: 'Audi' },
    { modelo: 'Civic', fabricante: 'Honda' },
    { modelo: 'Corolla', fabricante: 'Toyota' }
];
for (let carro of carros) {
    console.log(carro.fabricante, carro.modelo);
};

nome.forEach(function(valor, indice) {
    console.log(valor, indice);
});

frutas.forEach(function(valor, indice) {
    console.log(valor, indice);
});
carros.forEach(function(valor, indice) {
    console.log(valor, indice);
});