// Archivo: app.js

const { contarNumero, mostrarNumerosPares } = require('./proy_modules/functions.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un número para contar enteros positivos: ", function(numero) {
  contarNumero(parseInt(numero));
  rl.question("Ingresa un número para mostrar números pares: ", function(numero) {
    mostrarNumerosPares(parseInt(numero));
    rl.close();
  });
});
