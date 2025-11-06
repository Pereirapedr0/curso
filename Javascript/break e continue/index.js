const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (numero of num) {
    if (numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`);
        continue;
    }

    if (numero === 8) {
        console.log('8 encontrado, saindo...');
        break;
    }

    console.log(numero);
}

