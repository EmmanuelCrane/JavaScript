const logger = require('./logger')

function funcionError() {
    let mensaje = 'Error en tiempo de ejecucion, verifica tu codigo y vuelve a intentar';
    return mensaje;
}

try {
    throw Error(funcionError());
} catch (error) {
    console.log(error)
}

