var button = document.getElementById('dropdown-toggle');
button.addEventListener('click', function(event) {
event.preventDefault();
var menu = document.getElementById('dropdown');
menu.classList.toggle('is-open');
})