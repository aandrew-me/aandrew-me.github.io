let nav_hidden = true;
var screen = window.matchMedia("(min-width:700px)");
screen.addListener(myFunction);

function toggle() {
	if (nav_hidden) {
		document.getElementById("navbar").style.display = "block";
		nav_hidden = false;
	} else {
		document.getElementById("navbar").style.display = "none";
		nav_hidden = true;
	}
}
function myFunction() {
	if (screen.matches) {
		document.getElementById("navbar").style.display = "block";
		nav_hidden = false;
	}
	else{
		document.getElementById("navbar").style.display = "none";
		nav_hidden = true;
	}

}