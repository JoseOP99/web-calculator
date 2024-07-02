function delAll() {
  document.getElementById("display").value = "0";
  document.getElementById("result").value = "0";
}

function del() {
  let display = document.getElementById("display").value;
  const deleteLastChar = display.slice(-1);
  display = display.substring(0, display.length - 1);
  const numberRegex = /^[0-9]$/;
  if (numberRegex.test(parseInt(deleteLastChar))) {
    document.getElementById("display").value = display;
    calculate();
  } else {
    document.getElementById("display").value = display;
  }
}

function calculate() {
  let display = document.getElementById("display").value;
  const last = display.slice(-1);
  const numberRegex = /^[0-9]$/;
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
  const display = document.getElementById("display").value;
  if (display === "0") {
    document.getElementById("display").value = value;
  } else {
    document.getElementById("display").value += value;
  }
}

const buttons = document.getElementsByClassName("number");

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