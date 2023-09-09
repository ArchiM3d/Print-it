(function () { // Encapsulation du code js

	// Tableau des slides
	const slides = [
		{
			"image": "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image": "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image": "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image": "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]

	// Constantes et variables nécéssaires au slide
	const bannerImg = document.querySelector(".banner-img"); // Container pour l'image du slide
	const tagLine = document.getElementById("tagLine"); // Container pour le tagline du slide
	const dotsContainer = document.querySelector(".dots"); // Conteneur pour les dots
	let currentSlide = 0; // Index du slide actuel

	// Ajoutez un gestionnaire d'événements pour les flèches de gauche et de droite
	const arrowLeft = document.querySelector(".arrow_left");
	const arrowRight = document.querySelector(".arrow_right");
	arrowLeft.addEventListener("click", () => {
		changeSlide(-1);
	});
	arrowRight.addEventListener("click", () => {
		changeSlide(1);
	});

	// Fonction pour changer de  slide
	function updateSlide(index) {
		bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // Définie l'image du slide grace a l'index
		tagLine.innerHTML = slides[index].tagLine; // Définie le tag du slide grace a l'index
		dots.forEach(dot => dot.classList.remove("dot_selected")); // Enleve dot_selected
		dots[index].classList.add("dot_selected"); // et l'ajout au nouveau grace a l'index
	}

	// Lorsque l'on clique sur la fleche de gauche ou de droite
	function changeSlide(offset) {
		// Calcul de l'index du prochain slide en tenant compte de la longueur du tableau slides
		currentSlide = (currentSlide + offset + slides.length) % slides.length;
		updateSlide(currentSlide); // Update le slide avec le nouvel index
	}

	// Lorsque l'on clique sur un dot pour changer de slide directement
	function goToSlide(index) {
		currentSlide = index;
		updateSlide(currentSlide); // Update le slide avec le nouvel index
	}

	// Initialisation des dots
	function initializeDots() {
		for (let i = 0; i < slides.length; i++) {
			const dot = document.createElement("span"); // Crée un span
			dot.classList.add("dot"); // Ajout de la class dot
			dot.onclick = () => goToSlide(i); // Lors du clique va a la slide correspondante
			dotsContainer.appendChild(dot); // Ajout le dot au dotsContainer
		}
		dots = document.querySelectorAll(".dot"); // Mettre à jour la liste des dots
		dots[currentSlide].classList.add("dot_selected"); // Ajout dot_selected si c'est le slide correspondant
	}

	// Appeler la fonction d'initialisation des dots au chargement de la page
	initializeDots();

	// Init l'image sur la premiere
	updateSlide(currentSlide);
})();