const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 25,
    endereco: {
        rua: 'Rua ABC',
        numero: 1000
    }
}
console.log(pessoa);

const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);