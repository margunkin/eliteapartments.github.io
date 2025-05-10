// ----------------------- затемнение header ----------------
window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	if (window.scrollY > 0) {
		header.classList.add('header--background');
	} else {
		header.classList.remove('header--background');
	}
});

// -------------------- burger ------------------
document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav__wrapper');

	function closeMenu() {
		burger.classList.remove('burger--active');
		console.log('Меню закрыто');
	}

	burger.addEventListener('click', function (e) {
		e.stopPropagation();
		this.classList.toggle('burger--active');
		nav.classList.toggle('nav__wrapper--active');
	});

	document.addEventListener('click', closeMenu);
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') closeMenu();
	});
});
