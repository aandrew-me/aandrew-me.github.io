let myScreen = document.getElementById("screen");
let input = "";
let latestValue;

document.addEventListener("keydown", function (event) {
  if (
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "." ||
    event.key == "0"
  ) {
    addToScreen(event.key);
  } else if (event.key == "Enter") {
    process();
  } else if (
    event.key == "/" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "÷" ||
    event.key == "*"
  ) {
    operation(event.key);
  } else if (event.key == "Backspace") {
    del();
  }
  else if(event.key == "Delete"){
      clearScreen()
  }
});

function addToScreen(value) {
  myScreen.textContent += value;
  input += value;
  latestValue = value;
}

function copy() {
  navigator.clipboard.writeText(input);
}

function operation(value) {
  if (
    latestValue != "*" &&
    latestValue != "+" &&
    latestValue != "-" &&
    latestValue != "÷" &&
    latestValue != "/"
  ) {
    myScreen.textContent += value;
    input += value;
    latestValue = value;
  }
}

function clearScreen() {
  myScreen.textContent = "";
  input = "";
}

function del() {
  let splitted = myScreen.textContent.split("");
  splitted.pop();
  splitted = splitted.join("");

  myScreen.textContent = splitted;
  input = splitted;
}
function process() {
  let result = eval(input)
  myScreen.textContent = result
  input = result
  console.log(input)
}
