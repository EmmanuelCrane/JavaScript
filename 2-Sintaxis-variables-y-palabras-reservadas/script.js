const datosPersonales = [
  { nombre: "Emmanuel Salazara" },
  { edad: 24 },
  { "¿eres desarrollador": true },
  { cumpleaños: new Date("05/26/1998").toLocaleDateString() },
  {
    libroFavorito: {
      titulo: "Los grandes iniciados",
      autor: "Eduardo Schure",
      fecha: new Date("01/19/1972").toLocaleDateString(),
      url: "https://www.amazon.com.mx/GRANDES-INICIADOS-HERMES-MOISES-ORFEO/dp/8488337051/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1OPC3QMMI82VO&keywords=los+grandes+iniciados+e.shure&qid=1666581064&qu=eyJxc2MiOiIxLjI3IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sprefix=los+grandes+iniciados+e.shure%2Cstripbooks%2C284&sr=1-1",
    },
  },
];

console.log(datosPersonales);
