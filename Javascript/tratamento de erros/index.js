function soma (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Os parâmetros devem ser números');
    }
    return a + b;
}

try {
    console.log(soma(2, 3));
    console.log(soma(2, '3'));
} catch (error) {
    console.log('Erro capturado: ' + error.message);
}  
finally {
    console.log('Execução finalizada.');
}
