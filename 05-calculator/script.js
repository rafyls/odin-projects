let operand1 = null;
let operand2 = null;
let lastOperation = null;

const digitButtons = document.querySelectorAll(".digit-btn");
const decimalSepButton = document.querySelector(".decimal-sep-btn");
const percentageButton = document.querySelector(".percent-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalButton = document.querySelector(".equal-btn");
const clearButton = document.querySelector(".clear-btn");

digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", () => {
    alert(digitButton.textContent);
  });
});

decimalSepButton.addEventListener("click", () => {
    alert(decimalSepButton.textContent);
});


operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    alert(operatorButton.textContent);
  });
});

percentageButton.addEventListener("click", () => {
    alert(percentageButton.textContent);
});

equalButton.addEventListener("click", () => {
    alert(equalButton.textContent);
});

clearButton.addEventListener("click", () => {
    alert(clearButton.textContent);
});