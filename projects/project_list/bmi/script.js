let weight_input_value;
let height_input_value;
let inch_input_value;

let main_weight;
let main_height;

let weight_input = document.getElementById("weight");
let height1_input = document.getElementById("height");
let inch_input = document.getElementById("inches");

// Getting height and weight unit select elements
let weight_unit = document.getElementById("weight_select");

let height_unit = document.getElementById("height_select");

let total_inches;
let description = document.getElementById("bmi_description");

// Getting weight values from user input

function getWeight() {
	weight_input_value = parseFloat(document.getElementById("weight").value);

	if (weight_unit.value == "kg") {
		main_weight = weight_input_value;
	} else {
		main_weight = weight_input_value * 0.45359237;
	}
}

// Getting height values from user input

function getHeight() {
	height_input_value = parseFloat(document.getElementById("height").value);

	if (document.getElementById("inches").value == "") {
		inch_input_value = 0;
	} else {
		inch_input_value = parseFloat(document.getElementById("inches").value);
	}

	if (height_unit.value == "cm") {
		main_height = height_input_value / 100;
	} else {
		total_inches = height_input_value * 12 + inch_input_value;
		main_height = total_inches * 0.0254;
	}
}

// Triggered on button press

function calculate_bmi() {
	getWeight();
	getHeight();

	if (weight_input_value > 0 && height_input_value > 0) {
		let bmi = (main_weight / (main_height * main_height)).toFixed(1);

		if (bmi > 0) {
			document.getElementById("bmi_text").textContent =
				"Your BMI is " + bmi;
		}

		if (bmi > 0 && bmi < 18.5) {
			description.textContent = "You are Underweight.";
		} else if (bmi >= 18.5 && bmi <= 24.9) {
			description.textContent = "Congrats! You are healthy!";
		} else if (bmi >= 25 && bmi <= 29.9) {
			description.textContent = "You are overweight.";
		} else if (bmi >= 30) {
			description.textContent = "You are obese.";
		} else {
			description.textContent = "Please provide correct values.";
		}
	}
    else{
        document.getElementById("bmi_text").textContent = ""
        description.textContent = "Please provide correct values."
    }
}

// Changing weight input placeholder on option change

weight_unit.addEventListener("change", function () {
	if (this.value == "pound") {
		weight_input.placeholder = "Weight (pound)";
	} else {
		weight_input.placeholder = "Weight (kg)";
	}
	weight_input.value = "";
});

// Changing height input placeholder on option change

height_unit.addEventListener("change", function () {
	if (this.value == "feet") {
		height1_input.placeholder = "Feet";
		inch_input.className = "inches-visible";
	} else {
		height1_input.placeholder = "Height (cm)";
		inch_input.className = "inches-hidden";
	}

	height1_input.value = "";
	inch_input.value = "";
});
