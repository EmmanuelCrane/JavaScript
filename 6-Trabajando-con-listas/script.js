const listaDeCompras = ["fruta", "refresco", "agua", "carne", "papel"];
listaDeCompras.push("Aceite de Girasol");

const peliculas = [
    { titulo: "Hercules", director: "John Musker", fecha: 1997 },
    { titulo: "Hackers", director: "Iain Softley,", fecha: 1995 },
    { titulo: "El cazador y la reina del hielo", director: "Cedric Nicolas-Troyan", fecha: 2016 }
];

const peliculasPosterioresAldosMilDiez = peliculas.filter(element => element.fecha >= 2010);
const directores = peliculas.map(element => element.director);
const titulos = peliculas.map(element => element.titulo);
const tutulosYdirectores = titulos.concat(directores);
const tutulosYdirectores2 = [...titulos, ...directores];
