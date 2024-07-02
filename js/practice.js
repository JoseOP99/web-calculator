document.addEventListener("DOMContentLoaded", function () {
  newEquation();
});

function newEquation() {
  document.getElementById("result").disabled = false;
  document.getElementById("result").value = "";
  let operator = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  switch (operator) {
    case "add":
      generarEquation(3, "+");
      break;
    case "subtract":
      generarEquation(3, "-");
      break;
    case "multiply":
      generarEquation(2, "*");
      break;
    case "divide":
      generarEquation(2, "/");
      break;
    default:
      generarEquation(4, "a");
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function generarEquation(num, operator) {
  let equation = "";
  if (operator === "a") {
    for (let i = 0; i < num; i++) {
      op = getRandomInt(3);
      equation += getRandomInt(10);
      if (op === 1 && i < num - 1) {
        equation += "+";
      } else if (op === 2 && i < num - 1) {
        equation += "-";
      } else if (op === 3 && i < num - 1) {
        equation += "*";
      }
    }
  } else {
    for (let i = 0; i < num; i++) {
      if (operator === "+" || operator === "-") {
        equation += getRandomInt(50);
      } else {
        equation += getRandomInt(10);
      }
      if (i < num - 1) {
        equation += operator;
      }
    }
  }

  document.getElementById("equation").value = equation;
}

function compareResult() {
  let equation = document.getElementById("equation").value;
  let result = document.getElementById("result").value;
  let answer = parseInt(eval(equation));
  if (result === answer.toString()) {
    alert("Correcto");
    document.getElementById("result").disabled = true;
  } else {
    alert("Incorrecto");
  }
}

const operation = document.querySelectorAll('input[name="operation"]');
operation.forEach((radio) => {
  radio.addEventListener("change", newEquation);
});
const resultInput = document.getElementById("result");
resultInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    compareResult();
  }
});
