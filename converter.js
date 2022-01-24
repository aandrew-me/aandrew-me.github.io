// #######################
//   Base Converter
// #######################

// #######################
//   Made by Andrew
// #######################

let decimal = document.getElementById("decimal");
let binary = document.getElementById("binary");
let octal = document.getElementById("octal");
let hex = document.getElementById("hex");

let storage = localStorage.getItem("theme");

function copy1() {
	let copytext = decimal.value;
	navigator.clipboard.writeText(copytext);
}
function copy2() {
	let copytext = binary.value;
	navigator.clipboard.writeText(copytext);
}
function copy3() {
	let copytext = octal.value;
	navigator.clipboard.writeText(copytext);
}
function copy4() {
	let copytext = hex.value;
	navigator.clipboard.writeText(copytext);
}

// Clear text
function clearText() {
	decimal.value = "";
	binary.value = "";
	octal.value = "";
	hex.value = "";
}

// Copied
function copied() {
	if (document.getElementById("copied").className === "copied-hidden") {
		document.getElementById("copied").className = "copied-visible";
	}

	function makeHidden() {
		document.getElementById("copied").className = "copied-hidden";
	}
	setTimeout(makeHidden, 1000);
}

// Light switch
function lightSwitch() {
	let mode = document.getElementById("light-switch");
	let theme = document.getElementById("theme");
	let container = document.getElementById("container");
	let copy1 = document.getElementById("copy1");
	let copy2 = document.getElementById("copy2");
	let copy3 = document.getElementById("copy3");
	let copy4 = document.getElementById("copy4");

	if (mode.innerText === "Dark Mode") {
		// Adding to local storage
		localStorage.setItem("theme", "light");

		// changing button text
		mode.textContent = "Light Mode";
		mode.className = "light-mode";

		// Changing background
		theme.className = "light-bg";

		// Container theme
		container.className = "container-light";

		// Copy theme
		copy1.className = "copy-light";
		copy2.className = "copy-light";
		copy3.className = "copy-light";
		copy4.className = "copy-light";
	} else {
		// Adding to local storage
		localStorage.setItem("theme", "dark");

		// changing button text
		mode.textContent = "Dark Mode";
		mode.className = "dark-mode";

		// Changing background
		theme.className = "dark-bg";

		// Container theme
		container.className = "container-dark";

		// Copy theme
		copy1.className = "copy-dark";
		copy2.className = "copy-dark";
		copy3.className = "copy-dark";
		copy4.className = "copy-dark";
	}
}

// Decimal to binary
function decitobin() {
	let decimalVal = decimal.value;

	// If only integer
	if (decimalVal.includes(".") == false) {
		let quotient = 1;
		let remainder = "";
		let decimalValInside = decimalVal;

		while (quotient != 0) {
			remainder += decimalValInside % 2;
			quotient = Math.floor(decimalValInside / 2);
			decimalValInside = quotient;
		}
		// Reversing remainder
		let binaryVal = remainder.split("").reverse().join("");

		// For not showing useless zeros
		if (binaryVal == 0) {
			binary.value = "";
		} else {
			binary.value = binaryVal;
		}
	}
	// If fraction
	else {
		// Binary without fraction
		let quotient0 = 1;
		let remainder0 = "";
		let decimalValInside = decimalVal.split(".")[0];

		while (quotient0 != 0) {
			remainder0 += decimalValInside % 2;
			quotient0 = Math.floor(decimalValInside / 2);
			decimalValInside = quotient0;
		}
		// Reversing remainder
		var binaryVal0 = remainder0.split("").reverse().join("");

		// Binary with fraction
		let quotient = 1;
		let remainder = "";

		let multiplied = Math.floor(parseFloat(decimalVal) * 256);

		while (quotient != 0) {
			remainder += multiplied % 2;
			quotient = Math.floor(multiplied / 2);
			multiplied = quotient;
		}

		// Reversing remainder
		var reversed = remainder.split("").reverse().join("");

		// If there is no 0 in the beginning
		if (binaryVal0 != 0) {
			let fractPart = reversed.substring(binaryVal0.length);

			// Joining both parts
			let binaryVal = binaryVal0 + "." + fractPart;

			binary.value = binaryVal;
		}
		// Else If there is 0 in the beginning
		else {
			let fractPart = reversed;

			if (fractPart.length < 8) {
				fractPart = "." + "0".repeat(8 - fractPart.length) + fractPart;
				binary.value = parseFloat(fractPart);
			} else {
				binary.value = parseFloat("." + fractPart);
			}
		}
	}
}

// Decimal to Octal
function decitooctal() {
	let quotient = 1;
	let remainder = "";
	let decimalVal = decimal.value;

	// If only integer
	if (decimalVal.includes(".") == false) {
		while (quotient != 0) {
			remainder += decimalVal % 8;
			quotient = Math.floor(decimalVal / 8);
			decimalVal = quotient;

			// Reversing remainder
			let octalVal = remainder.split("").reverse().join("");

			// For not showing useless zeros
			if (octalVal == 0) {
				octal.value = "";
			} else {
				octal.value = octalVal;
			}
		}
	}
	// If fraction
	else {
		// Octal without fraction
		let quotient0 = 1;
		let remainder0 = "";
		let decimalValInside = decimalVal.split(".")[0];

		while (quotient0 != 0) {
			remainder0 += decimalValInside % 8;
			quotient0 = Math.floor(decimalValInside / 8);
			decimalValInside = quotient0;
		}
		// Reversing remainder
		var octalVal0 = remainder0.split("").reverse().join("");

		// Octal with fraction
		let quotient = 1;
		let remainder = "";

		let multiplied = Math.floor(parseFloat(decimalVal) * 16777216);

		while (quotient != 0) {
			remainder += multiplied % 8;
			quotient = Math.floor(multiplied / 8);
			multiplied = quotient;
		}

		// Reversing remainder
		var reversed = remainder.split("").reverse().join("");

		if (octalVal0 != 0) {
			let fractPart = reversed.substring(octalVal0.length);

			// Joining both parts
			let octalVal = octalVal0 + "." + fractPart;
			octal.value = parseFloat(octalVal);
		}
		// Else If there is 0 in the beginning
		else {
			let fractPart = reversed;

			if (fractPart.length < 8) {
				fractPart = "." + "0".repeat(8 - fractPart.length) + fractPart;
				octal.value = parseFloat(fractPart);
			} else {
				octal.value = parseFloat("." + fractPart);
			}
		}
	}
}

// Decimal to Hexadecimal

function decitohex() {
	let quotient = 1;
	let remainder = "";
	let decimalVal = decimal.value;

	// If only integer
	if (decimalVal.includes(".") == false) {
		while (quotient != 0) {
			if (decimalVal % 16 == 10) {
				remainder += "A";
			} else if (decimalVal % 16 == 11) {
				remainder += "B";
			} else if (decimalVal % 16 == 12) {
				remainder += "C";
			} else if (decimalVal % 16 == 13) {
				remainder += "D";
			} else if (decimalVal % 16 == 14) {
				remainder += "E";
			} else if (decimalVal % 16 == 15) {
				remainder += "F";
			} else {
				remainder += decimalVal % 16;
			}

			quotient = Math.floor(decimalVal / 16);
			decimalVal = quotient;

			// Reversing remainder
			let hexVal = remainder.split("").reverse().join("");

			// For not showing useless zeros
			if (hexVal == 0) {
				hex.value = "";
			} else {
				hex.value = hexVal;
			}
		}
	}
	// If fraction
	else {
		// Hex without fraction
		let quotient0 = 1;
		let remainder0 = "";
		let decimalValInside = decimalVal.split(".")[0];

		while (quotient0 != 0) {
			if (decimalValInside % 16 == 10) {
				remainder0 += "A";
			} else if (decimalValInside % 16 == 11) {
				remainder0 += "B";
			} else if (decimalValInside % 16 == 12) {
				remainder0 += "C";
			} else if (decimalValInside % 16 == 13) {
				remainder0 += "D";
			} else if (decimalValInside % 16 == 14) {
				remainder0 += "E";
			} else if (decimalValInside % 16 == 15) {
				remainder0 += "F";
			} else {
				remainder0 += decimalValInside % 16;
			}

			quotient0 = Math.floor(decimalValInside / 16);
			decimalValInside = quotient0;
		}
		// Reversing remainder
		var hexVal0 = remainder0.split("").reverse().join("");

		// Hex with fraction
		let quotient = 1;
		let remainder = "";

		let multiplied = Math.floor(parseFloat(decimalVal) * 4294967296);

		while (quotient != 0) {
			if (multiplied % 16 == 10) {
				remainder += "A";
			} else if (multiplied % 16 == 11) {
				remainder += "B";
			} else if (multiplied % 16 == 12) {
				remainder += "C";
			} else if (multiplied % 16 == 13) {
				remainder += "D";
			} else if (multiplied % 16 == 14) {
				remainder += "E";
			} else if (multiplied % 16 == 15) {
				remainder += "F";
			} else {
				remainder += multiplied % 16;
			}

			quotient = Math.floor(multiplied / 16);
			multiplied = quotient;
		}

		// Reversing remainder
		var reversed = remainder.split("").reverse().join("");

		// If fractions don't begin with 0
		if (hexVal0 != 0) {
			let fractPart = reversed.substring(hexVal0.length);

			// Joining both parts
			let hexVal = hexVal0 + "." + fractPart;
			hex.value = hexVal;
		}
		// Else If there is 0 in the beginning
		else {
			let fractPart = reversed;

			if (fractPart.length < 8) {
				fractPart = "." + "0".repeat(8 - fractPart.length) + fractPart;
				hex.value = "0." + fractPart;
			} else {
				hex.value = "0." + fractPart;
			}
		}
	}
}

// DECIMAL TO ALL

function decitoall() {
	decitobin();
	decitooctal();
	decitohex();
}

// BINARY TO ALL

function bintoall() {
	// Sanitizing input
	if (
		binary.value.includes(2) == false &&
		binary.value.includes(3) == false &&
		binary.value.includes(4) == false &&
		binary.value.includes(5) == false &&
		binary.value.includes(6) == false &&
		binary.value.includes(7) == false &&
		binary.value.includes(8) == false &&
		binary.value.includes(9) == false
	) {
		binary.className = "input";
		bintodeci();
		decitooctal();
		decitohex();
	} else {
		binary.className = "input-error";
	}
}

// Binary to Decimal

function bintodeci() {
	let sum = 0;
	let intSum = 0;
	let fractSum = 0;

	// If not fraction
	if (binary.value.includes(".") == false) {
		for (let i = 0; i < binary.value.length; i++) {
			let binReversed = binary.value.split("").reverse();

			sum += parseInt(binReversed[i]) * Math.pow(2, i);
		}
		decimal.value = sum;

		// For useless zeros
		if (decimal.value == "0") {
			decimal.value = "";
		}
	}
	// Else If fraction
	else {
		let intPart = binary.value.split(".")[0];
		let fractPart = binary.value.split(".")[1];

		for (let i = 0; i < intPart.length; i++) {
			let intReversed = intPart.split("").reverse();

			// Multiplying and getting sum for the integer part
			intSum += parseInt(intReversed[i]) * Math.pow(2, i);
		}

		let k = -1;

		for (let j = 0; j < fractPart.length; j++) {
			// Iterating through fractPart and multiplying
			fractSum += parseInt(fractPart[j]) * Math.pow(2, k);
			k--;
		}
		decimal.value = intSum + "." + fractSum.toString().split(".")[1];
	}
}

// OCTAL TO ALL

function octtoall() {
	// Sanitizing input
	if (octal.value.includes(8) == false && octal.value.includes(9) == false) {
		octal.className = "input";
	} else {
		octal.className = "input-error";
	}

	octtodeci();
	decitobin();
	decitohex();
}

// OCTAL TO DECIMAL

function octtodeci() {
	let sum = 0;
	let intSum = 0;
	let fractSum = 0;

	// If not fraction
	if (octal.value.includes(".") == false) {
		for (let i = 0; i < octal.value.length; i++) {
			let octReversed = octal.value.split("").reverse();

			sum += parseInt(octReversed[i]) * Math.pow(8, i);
		}
		decimal.value = sum;

		// For useless zeros
		if (decimal.value == "0") {
			decimal.value = "";
		}
	}
	// Else If fraction
	else {
		let intPart = octal.value.split(".")[0];
		let fractPart = octal.value.split(".")[1];

		for (let i = 0; i < intPart.length; i++) {
			let intReversed = intPart.split("").reverse();

			// Multiplying and getting sum for the integer part
			intSum += parseInt(intReversed[i]) * Math.pow(8, i);
		}

		let k = -1;

		for (let j = 0; j < fractPart.length; j++) {
			// Iterating through fractPart and multiplying
			fractSum += parseInt(fractPart[j]) * Math.pow(8, k);
			k--;
		}
		decimal.value = intSum + "." + fractSum.toString().split(".")[1];
	}
}

// HEX TO ALL
let invalidInputs = [
	" ",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"-",
];

function hextoall() {
	hex.value = hex.value.toUpperCase();
	let containsInvalid = false;
	let dotCount = 0;

	// Checking for invalid values
	for (let i = 0; i < hex.value.length; i++) {
		if (invalidInputs.includes(hex.value.split("")[i])) {
			containsInvalid = true;
			break;
		}
		if (hex.value.split("")[i] == ".") {
			dotCount += 1;
		}
	}
	if (containsInvalid == true || dotCount > 1) {
		hex.className = "input-error";
	} else {
		hex.className = "input";

		hextodeci();
		decitobin();
		decitooctal();
	}
}

// HEX TO DECIMAL

function hextodeci() {
	let sum = 0;
	let intSum = 0;
	let fractSum = 0;

	// If not fraction
	if (hex.value.includes(".") == false) {
		for (let i = 0; i < hex.value.length; i++) {
			let hexReversed = hex.value.split("").reverse();

			// Changing Alpha values to Numbers
			if (hexReversed[i] == "A") {
				hexReversed[i] = 10;
			} else if (hexReversed[i] == "B") {
				hexReversed[i] = 11;
			} else if (hexReversed[i] == "C") {
				hexReversed[i] = 12;
			} else if (hexReversed[i] == "D") {
				hexReversed[i] = 13;
			} else if (hexReversed[i] == "E") {
				hexReversed[i] = 14;
			} else if (hexReversed[i] == "F") {
				hexReversed[i] = 15;
			}

			sum += parseInt(hexReversed[i]) * Math.pow(16, i);
		}
		decimal.value = sum;

		// For useless zeros
		if (decimal.value == "0") {
			decimal.value = "";
		}
	}
	// Else If fraction
	else {
		// Integer part
		let intPart = hex.value.split(".")[0];

		for (let i = 0; i < intPart.length; i++) {
			let intReversed = intPart.split("").reverse();

			// Changing Alpha values to Numbers
			if (intReversed[i] == "A") {
				intReversed[i] = 10;
			} else if (intReversed[i] == "B") {
				intReversed[i] = 11;
			} else if (intReversed[i] == "C") {
				intReversed[i] = 12;
			} else if (intReversed[i] == "D") {
				intReversed[i] = 13;
			} else if (intReversed[i] == "E") {
				intReversed[i] = 14;
			} else if (intReversed[i] == "F") {
				intReversed[i] = 15;
			}

			// Multiplying and getting sum for the integer part
			intSum += parseInt(intReversed[i]) * Math.pow(16, i);
		}
		// Fractional part

		let fractPart = hex.value.split(".")[1].split("");
		let k = -1;

		for (let j = 0; j < fractPart.length; j++) {
			// Changing Alpha values to Numbers
			if (fractPart[j] == "A") {
				fractPart[j] = 10;
			} else if (fractPart[j] == "B") {
				fractPart[j] = 11;
			} else if (fractPart[j] == "C") {
				fractPart[j] = 12;
			} else if (fractPart[j] == "D") {
				fractPart[j] = 13;
			} else if (fractPart[j] == "E") {
				fractPart[j] = 14;
			} else if (fractPart[j] == "F") {
				fractPart[j] = 15;
			}

			// Iterating through fractPart and multiplying
			fractSum += parseInt(fractPart[j]) * Math.pow(16, k);
			k--;
		}
		decimal.value = intSum + "." + fractSum.toString().split(".")[1];
	}
}
