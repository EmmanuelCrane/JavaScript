const fechaActual = new Date().toLocaleDateString();
const fechaDeNacimiento = new Date(1998, 04, 26).toLocaleDateString();
const comparacionDeFechas = fechaActual > fechaDeNacimiento;
const diaDeNacimiento = new Date(1998, 04, 26).getDay();
const mesDeNacimiento = new Date(1998, 04, 26).getMonth();
const anioDeNacimiento = new Date(1998, 04, 26).getFullYear()