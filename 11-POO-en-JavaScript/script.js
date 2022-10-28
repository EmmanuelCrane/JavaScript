class Estudiante {
    
    #nombre;
    #asignatiras;

    constructor(nombre) {
        this.nombre = nombre;
        this.asignaturas = ['JavaScript', 'HTML', 'CSS'];
    }

    obtenerDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas,
        }
    }
}

const estudiante = new Estudiante('Emmanuel');

console.log(estudiante.obtenerDatos())