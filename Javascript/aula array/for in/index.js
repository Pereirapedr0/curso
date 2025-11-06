const frutas = ['pera', 'maçã', 'uva'];

for (let indice in frutas) {
  console.log(frutas[indice]);
}

const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
}
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

const carros = {
    modelo: 'A4',
    fabricante: 'Audi',
    ano: 2020
}
for (let propriedade in carros) {
    console.log(propriedade, carros[propriedade]);
}