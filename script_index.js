const leftBtn = document.querySelector(".btn-carousel-left");
const rightBtn = document.querySelector(".btn-carousel-right");
const slides = document.querySelector(".content");

leftBtn.addEventListener("click", () => {
	const activeSlide = slides.querySelector("[data-active]");

	let newActiveIndex = [...slides.children].indexOf(activeSlide) - 1;
	if (newActiveIndex < 0) {
		newActiveIndex = slides.children.length - 1;
	} else if (newActiveIndex > slides.children.length - 1) {
		newActiveIndex = 0;
	}

	slides.children[newActiveIndex].dataset.active = true;
	delete activeSlide.dataset.active;
});

rightBtn.addEventListener("click", () => {
	const activeSlide = slides.querySelector("[data-active]");

	let newActiveIndex = [...slides.children].indexOf(activeSlide) + 1;
	if (newActiveIndex < 0) {
		newActiveIndex = slides.children.length - 1;
	} else if (newActiveIndex > slides.children.length - 1) {
		newActiveIndex = 0;
	}

	slides.children[newActiveIndex].dataset.active = true;
	delete activeSlide.dataset.active;
});
