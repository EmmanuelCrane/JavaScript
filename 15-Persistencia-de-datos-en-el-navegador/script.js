let nombre = "Emmanuel";
let apellido = "Salazar";
let datosPersonales = {
  nombre,
  apellido,
};

let datosString = JSON.stringify(datosPersonales);
sessionStorage.setItem("datos", datosString);
localStorage.setItem("datos", datosString);

let d = new Date();
let m = d.getMinutes();
d.setMinutes(m + 2);
document.cookie = 'miPimerCookie=cookieUno'
document.cookie = "miPimerCookie=cookieUno;expires=" + d.toString();
// console.log(document.cookie);
