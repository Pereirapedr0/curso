const nome = "Pedro";
const sobreNome = "Pereira";
const idade = 31;
const altura = 1.73;
const peso = 96;
const imc = peso / (altura * altura);

console.log(nome, sobreNome, "tem", idade, "anos de idade,", "mede", altura, "m de altura,", "pesa", peso, "kg, e seu IMC é de " + imc.toFixed(2));