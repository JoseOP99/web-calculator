function delAll() {
  document.getElementById("display").value = "0";
  document.getElementById("result").value = "0";
}

function del() {
  var display = document.getElementById("display").value;
  deleteLastChar = display.slice(-1);
  display = display.substring(0, display.length - 1);
  let numberRegex = /^[0-9]$/;
  if (numberRegex.test(parseInt(deleteLastChar))) {
    document.getElementById("display").value = display;
    calculate();
  } else {
    document.getElementById("display").value = display;
  }
}

function calculate() {
  let display = document.getElementById("display").value;
  last = display.slice(-1);
  let numberRegex = /^[0-9]$/;
  let result;
  if (numberRegex.test(parseInt(last))) {
    result = eval(display);
  } else if (display === "" || display === "0") {
    result = "0";
  } else {
    display = display.substring(0, display.length - 1);
    result = eval(display);
  }
  document.getElementById("result").value = result;
}

function appendToDisplay(value) {
  let display = document.getElementById("display").value;
  if (display === "0") {
    document.getElementById("display").value = value;
  } else {
    document.getElementById("display").value += value;
  }
}

let buttons = document.getElementsByClassName("number");

Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", function () {
    calculate();
  });
});

function add(value) {
  let display = document.getElementById("display").value;
  display += value;
  document.getElementById("display").value = display;
}

function result() {
  document.getElementById("display").value = document.getElementById("result").value; 
}