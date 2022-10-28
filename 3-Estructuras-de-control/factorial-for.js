let nFactorial = 10;
const factorial = [];
let multiplicador = 1;
 for(let i = 1; i <= nFactorial; i++) {
    multiplicador *= i;
    factorial.push(multiplicador);
 }

 console.log(factorial);