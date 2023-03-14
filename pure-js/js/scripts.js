/* Definindos os eventos de aparecimento e desaparecimento do menu side-bar */
function openNav() {
	const slideNav = document.getElementById('slide-nav');
	slideNav.classList.add('show-menu');

	setTimeout(function () {
		// Para quando clickar fora do menu e fechar o side-bar do mesmo jeito
		document.addEventListener('click', checkClickOutsideNav);
	}, 500);
}

function closeNav() {
	const slideNav = document.getElementById('slide-nav');
	slideNav.classList.remove('show-menu');
}

function checkClickOutsideNav(event) {
	if (!event.target.classList.value.split(' ').some(elem => ['slide-nav', 'head'].includes(elem))) {
		closeNav();
		document.removeEventListener('click', checkClickOutsideNav);
	}
}

/* Imprimir a tela de currículo */
function printScreen() {
    window.print();
}