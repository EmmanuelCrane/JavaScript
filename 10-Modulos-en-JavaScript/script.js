import chalk from 'chalk';
import { suma, multiplicar } from  './controller.js';

const resulSuma = suma(4,5);
const resultMultiplicar = multiplicar(1,2);

console.log(chalk.green(resulSuma));
console.log(chalk.green(resultMultiplicar));