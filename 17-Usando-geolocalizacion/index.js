let latitudLongitudCuernavaca = [18.965093451463964, -99.1554986656384];
let latitudLongitudEgipto = [26.717210854912288, 29.567002429421894];
let latitudLongitudInglaterra = [54.9939534456902, -2.2656300542957846];

let map = L.map('map').setView(latitudLongitudCuernavaca,13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

let marker = L.marker(latitudLongitudCuernavaca).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Cuernavaca!</b>").openPopup();

let marker2 = L.marker(latitudLongitudEgipto).addTo(map);
marker2.bindPopup("<b>¡Bienvenidos a Egipto!</b>").openPopup();

let marker3 = L.marker(latitudLongitudInglaterra).addTo(map);
marker3.bindPopup("<b>¡Bienvenidos a Inglaterra!</b>").openPopup();