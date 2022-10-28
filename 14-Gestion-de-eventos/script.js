const button = document.querySelector('#click');

button.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Click en el boton');
});

$('#click').click(function() { console.log('Hola estoy utilizando Jquery')});
