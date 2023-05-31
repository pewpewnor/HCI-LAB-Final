document.querySelector(".nav-right-dropdown").addEventListener("click", () => {
	document.querySelector(".dropdown").style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
	document.querySelector(".dropdown").style.display = "none";
});

if (localStorage.getItem("darkview") === "enabled") {
	document.body.classList.toggle("dark-view");
	document.querySelector('input[name="light-input"]').checked = true;
}

document
	.querySelector('input[name="light-input"]')
	.addEventListener("change", (event) => {
		document.body.classList.toggle("dark-view");
    if (event.currentTarget.checked) {
			localStorage.setItem("darkview", "enabled");
		} else {
			localStorage.setItem("darkview", "disabled");
		}
	});

