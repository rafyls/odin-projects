let operand1 = null;
let operand2 = null;
let lastOperation = null;

const digitButtons = document.querySelectorAll(".digit-btn");
const decimalSepButton = document.querySelector(".decimal-sep-btn");
const percentageButton = document.querySelector(".percent-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalButton = document.querySelector(".equal-btn");
const clearButton = document.querySelector(".clear-btn");

const display = document.querySelector(".display");

const displayParagraph = document.querySelector(".display p");

let firstDigitClick = true;
let firstDecimalSepClick = true;
let newResult = false;

function numberOfDecimalSep() {
  const number = displayParagraph.textContent.split("");

  let numDecimalSep = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === ".") {
      numDecimalSep++;
    }
  }

  return numDecimalSep;
}

digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", () => {

    if (firstDigitClick || newResult) {
      firstDigitClick = false;
      newResult = false;

      displayParagraph.textContent = "";
      
      displayParagraph.textContent = displayParagraph.textContent + digitButton.textContent;
    } else {
      displayParagraph.textContent = displayParagraph.textContent + digitButton.textContent;
    }

    if ((operand1 === null) || (lastOperation === null)) {
      operand1 = Number.parseFloat(displayParagraph.textContent);
    } else {
      operand2 = Number.parseFloat(displayParagraph.textContent);
    }
  });
});

decimalSepButton.addEventListener("click", () => {
  if (firstDecimalSepClick) {
    firstDecimalSepClick = false;
    displayParagraph.textContent = displayParagraph.textContent + decimalSepButton.textContent;
  } else {
    let numDecimalSep = numberOfDecimalSep();

    if (numDecimalSep === 0) {
      displayParagraph.textContent = displayParagraph.textContent + decimalSepButton.textContent;
      decimalSepButton.disabled = false;
    } else {
      decimalSepButton.disabled = true;
    }
  }
});


operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    alert(operatorButton.textContent);
  });
});

percentageButton.addEventListener("click", () => {
  value = Number.parseFloat(displayParagraph.textContent);
  
  let percentageValue = value / 100;

  displayParagraph.textContent = "";
  displayParagraph.textContent = percentageValue.toString();
  
  newResult = true;

  if ((operand1 === null) || (lastOperation === null)) {
    operand1 = percentageValue;
  } else {
    operand2 = percentageValue;
  }
});

equalButton.addEventListener("click", () => {
    alert(equalButton.textContent);
});

clearButton.addEventListener("click", () => {
    alert(clearButton.textContent);
});