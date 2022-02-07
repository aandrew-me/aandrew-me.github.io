let whose_turn = 1;
let turns_left = 9;
let player_turn = document.getElementById("player_turn");

let boxes = document.getElementsByClassName("boxes");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let display_overlay = document.getElementById("overlay");

// ##############################
// Main function
// ##############################
function cross_or_circle(name) {
	let box = document.getElementById(name);

	if (box.textContent == "" && whose_turn == 1) {
		box.textContent = "X";
		whose_turn = 2;
		turns_left -= 1;
		console.log(turns_left);
	} else if (box.textContent == "" && whose_turn == 2) {
		box.textContent = "O";
		whose_turn = 1;
		turns_left -= 1;
		console.log(turns_left);
	}
	player_turn.textContent = "Player " + whose_turn + "'s turn";
	check_rows();
	check_columns();
	check_diagonals();
}

function check_rows() {
	let row1 = false;
	let row2 = false;
	let row3 = false;

	if (
		box1.textContent == box2.textContent &&
		box2.textContent == box3.textContent &&
		box3.textContent != ""
	) {
		row1 = true;
	} else if (
		box4.textContent == box5.textContent &&
		box5.textContent == box6.textContent &&
		box6.textContent != ""
	) {
		row2 = true;
	} else if (
		box7.textContent == box8.textContent &&
		box8.textContent == box9.textContent &&
		box9.textContent != ""
	) {
		row3 = true;
	}

	if (row1 || row2 || row3) {
		if (whose_turn == 2) {
			player_turn.textContent = "Player 1 has won";
		} else if (whose_turn == 1) {
			player_turn.textContent = "Player 2 has won";
		}
		overlay();
	} else {
		if (turns_left == 0) {
			player_turn.textContent = "It's a Draw!";
			overlay();
		}
	}
}
function check_columns() {
	let col1 = false;
	let col2 = false;
	let col3 = false;

	if (
		box1.textContent == box4.textContent &&
		box4.textContent == box7.textContent &&
		box7.textContent != ""
	) {
		col1 = true;
	} else if (
		box2.textContent == box5.textContent &&
		box5.textContent == box8.textContent &&
		box8.textContent != ""
	) {
		col2 = true;
	} else if (
		box3.textContent == box6.textContent &&
		box6.textContent == box9.textContent &&
		box9.textContent != ""
	) {
		col3 = true;
	}

	if (col1 || col2 || col3) {
		if (whose_turn == 2) {
			player_turn.textContent = "Player 1 has won";
		} else if (whose_turn == 1) {
			player_turn.textContent = "Player 2 has won";
		}
		overlay();
	} else {
		if (turns_left == 0) {
			player_turn.textContent = "It's a Draw!";
			overlay();
		}
	}
}
function check_diagonals() {
	let diagonal1 = false;
	let diagonal2 = false;

	if (
		box1.textContent == box5.textContent &&
		box5.textContent == box9.textContent &&
		box9.textContent != ""
	) {
		diagonal1 = true;
	} else if (
		box3.textContent == box5.textContent &&
		box5.textContent == box7.textContent &&
		box7.textContent != ""
	) {
		diagonal2 = true;
	}

	if (diagonal1 || diagonal2) {
		if (whose_turn == 2) {
			player_turn.textContent = "Player 1 has won";
		} else if (whose_turn == 1) {
			player_turn.textContent = "Player 2 has won";
		}
		overlay();
	} else {
		if (turns_left == 0) {
			player_turn.textContent = "It's a Draw!";
			overlay();
		}
	}
}
// Covers the display with an option to restart or exit
function overlay() {
	display_overlay.style.display = "flex";
}

// #################################
// RESTART FUNCTION
// #################################

function restart_match() {
	display_overlay.style.display = "none";
	box1.textContent = "";
	box2.textContent = "";
	box3.textContent = "";
	box4.textContent = "";
	box5.textContent = "";
	box6.textContent = "";
	box7.textContent = "";
	box8.textContent = "";
	box9.textContent = "";

	player_turn.textContent = "Player 1's turn";
	whose_turn = 1;
	turns_left = 9;
}
