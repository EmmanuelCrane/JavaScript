function bool() {
    return true;
}

const promis = new Promise((resolve,reject) => {
    return setTimeout(_ => resolve(),5000)
});

promis.then(resolve => console.log('Hola soy una promesa'))

function* generadora(value) {
    let contador = 0;

    while(true) {

        contador ++;

        if(contador >= value) {
            return 'Ya no hay mas valores';
        }else if (contador % 2 === 1) {
            continue;
        }

        yield contador
    }
}

let gen = generadora(10);
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)