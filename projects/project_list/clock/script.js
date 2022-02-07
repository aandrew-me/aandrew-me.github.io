let hourHand = document.getElementById("hour");
let minuteHand = document.getElementById("minute")
let secondHand = document.getElementById("second")

function playtime() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

    // for hours
    if (hours > 12){
        hours = hours - 12;
    }
    if (hours < 10){
        hours = "0" + hours;
    }
    // for minutes
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    // for seconds
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    hourHand.textContent = hours;
    minuteHand.textContent = minutes;
    secondHand.textContent = seconds;

}
setInterval(playtime, 100);
