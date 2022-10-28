let nFactorial = 10;
let contador = 1;
const factorial = [];
let multiplicador = 1;

 while(contador <= nFactorial) {
    multiplicador *= contador;
    contador++
    factorial.push(multiplicador);
 }

 console.log(factorial);