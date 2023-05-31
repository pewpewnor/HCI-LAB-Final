window.onload = () => {
	const nameText = document.getElementById("iname");
	const phoneText = document.getElementById("iphone");
	const addrText = document.getElementById("iaddr");
	const productText = document.getElementById("product");
	const qtyText = document.getElementById("quantity");

	const submitBtn = document.getElementById("submitBtn");
	const addBtn = document.getElementById("addBtn");

	const cartList = document.getElementById("cart-list");

	function getValue(field) {
		return field.value.trim();
	}

	function hasLastname(str) {
		for (const letter of str) {
			if (letter === " ") {
				return true;
			}
		}
		return false;
	}

	function isAlphabetic(str) {
		for (const letter of str) {
			if (isNaN(letter) === false && letter !== " ") {
				return false;
			}
		}
		return true;
	}

	function isNumeric(str) {
		for (const letter of str) {
			if (isNaN(letter) && letter !== " ") {
				return false;
			}
		}
		return true;
	}

	function validate() {
		let name = getValue(nameText);
		if (name === "") {
			alert("Name must be filled!");
			return;
		}
		let phone = getValue(phoneText);
		if (phone === "") {
			alert("Phone must be filled!");
			return;
		}
		let addr = getValue(addrText);
		if (addr === "") {
			alert("Address must be filled!");
			return;
		}

		if (isAlphabetic(name) === false) {
			alert("Name is not alphabetic!");
			return;
		}
		if (hasLastname(name) === false) {
			alert("Name must have a last name!");
			return;
		}
		if (isNumeric(phone) === false) {
			alert("Phone number is not numeric!");
			return;
		}
		if (phone.length < 12) {
			alert("Phone number must be equal or more than 12 digits!");
			return;
		}
		if (addr.endsWith(" Street") === false) {
			alert("Address must ends with ' Street'");
			return;
		}

		// sucess
	}

	submitBtn.addEventListener("click", validate);

	function addProduct() {
		let product = getValue(productText);
		if (product === "") {
			alert("Product name must be filled!");
			return;
		}
		let qty = getValue(qtyText);
		if (qty === "") {
			alert("Product quantity must be filled!");
			return;
		}

		if (
			product !== "75% Cocoa Sulawesi" &&
			product !== "100% Cocoa Dark Chocolate" &&
			product !== "70% Cocoa Dark Chocolate" &&
			product !== "53% Cocoa Cinnamon"
		) {
			alert("Invalid product name!");
			return;
		}

		if (isNumeric(qty) === false) {
			alert("Product quantity must be numeric!");
			return;
		}
		if (qty <= 0) {
			alert("Product quantity must be higher than 0");
			return;
		}

		// success

		const item = document.createElement("p");
		item.innerText = product + " - " + qty;
		cartList.appendChild(item);
	}

	addBtn.addEventListener("click", addProduct);
};