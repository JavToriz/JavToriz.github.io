function showForm() {
    var formContainer = document.getElementById('form-container');
    formContainer.style.display = 'block';
  }

// Inicializar el mapa
var mymap = L.map('mapid').setView([20.03505, -98.31423], 13);
// Agregar el mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);
// Agregar un marcador en la ubicación deseada
var marker = L.marker([20.03505, -98.31423]).addTo(mymap);


 // Fecha del evento (año, mes [base 0], día, hora, minuto, segundo)
var eventDate = new Date(2024, 7, 27, 12, 0, 0);

function updateCountdown() {
var now = new Date();
var difference = eventDate - now;

var days = Math.floor(difference / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((difference % (1000 * 60)) / 1000);

document.getElementById('countdown').textContent = 'Quedan: ' + days + ' días, ' + hours + ' horas, ' + minutes + ' minutos, ' + seconds + ' segundos';
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

function changePage() {
var content = document.querySelector('.content');
content.style.backgroundColor = 'white';
content.innerHTML = '';
content.innerHTML = '<div class="page-turn" onclick="changePage()">&#10094;</div><p>Nuevo contenido aquí</p>';
}

function showForm() {
var formContainer = document.getElementById('form-container');
formContainer.style.display = 'block';
}
