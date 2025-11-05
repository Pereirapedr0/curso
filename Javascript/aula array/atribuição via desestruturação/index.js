const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...restoNumeros] = numeros;
console.log(um, dois, tres);
console.log(restoNumeros);

const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [,[,cinco]] = num;
console.log(cinco);