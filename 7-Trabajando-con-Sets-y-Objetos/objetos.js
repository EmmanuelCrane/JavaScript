const datos = {
    nombre: 'Emmanuel',
    apellido: 'Salazar',
    edad: 24,
    eresDesarroyador: true
};

const edad = datos.edad;

const amigos = [
    datos,
    {
        nombres: 'Ivan',
        apellidos: 'Arteaga',
        edad: 26,
        eresDEsarroyador: false
    },
    {
        nombres: 'Oswaldo',
        apellidos: 'Olivares',
        edad: 24,
        eresDEsarroyador: false
    }
];

const datosOrdenados = amigos.sort((x,y) => x.edad - y.edad);