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

    if (firstDigitClick) {
      firstDigitClick = false;

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
    alert(percentageButton.textContent);
});

equalButton.addEventListener("click", () => {
    alert(equalButton.textContent);
});

clearButton.addEventListener("click", () => {
    alert(clearButton.textContent);
});