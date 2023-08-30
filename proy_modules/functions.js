// Archivo: functions.js

function contarNumero(numero) {
  if (numero <= 0) {
    console.log("Por favor, ingresa un número positivo mayor que cero.");
    return;
  }

  console.log("Enteros positivos hasta", numero);
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}

function mostrarNumerosPares(numero) {
  if (numero < 0) {
    console.log("El número debe ser positivo.");
    return;
  }

  console.log("Números pares incluidos en el numero ", numero);
  const numeroStr = numero.toString();

  for (let i = 0; i < numeroStr.length; i++) {
    const digito = parseInt(numeroStr[i]);
    if (digito % 2 === 0) {
      console.log(digito);
    }
  }
}

module.exports = {
  contarNumero,
  mostrarNumerosPares
};
