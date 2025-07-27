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
let displayCleared = false;

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

function computeResult(op1, op2, op) {
  let result = 0;

  op = op.charCodeAt(0);

  switch (op) {
    case 43:  // Plus sign
      result = op1 + op2;
      break;
    case 8722: // Minus sign
      result = op1 - op2;
      break;
    case 215: // Multiplication sign
      result = op1 * op2;
      break;
    case 247: // Division sign
      if ((op1 === 0) || (op2 === 0)) {
        result = null;
      } else {
        result = op1 / op2;
      }
      break;
    default:
      break;
  }
  return result;
}

digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", () => {

    if ((firstDigitClick || newResult)) {
      firstDigitClick = false;
      newResult = false;

      if (displayCleared) {
        displayCleared = false;
        if (displayParagraph.textContent === "0.") {
          displayParagraph.textContent = displayParagraph.textContent + digitButton.textContent;
        } else {
          displayParagraph.textContent = "";
        
          displayParagraph.textContent = displayParagraph.textContent + digitButton.textContent;
        }
      } else {
        displayParagraph.textContent = "";
        
        displayParagraph.textContent = displayParagraph.textContent + digitButton.textContent;
      }
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
    }
  }
});


operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    if (operand1 === null) {
      operand1 = 0;
    }

    if (operand2 === null) {
      lastOperation = operatorButton.textContent;
      firstDigitClick = true;
    } else {
      let result = computeResult(operand1, operand2, lastOperation);
      
      if (result === null) {
        alert("Error: Division by 0 is impossible!");
        operand1 = null;
        operand2 = null;
        lastOperation = null;
      } else {
        displayParagraph.textContent = "";
        displayParagraph.textContent = result.toString();

        operand1 = result;
        operand2 = null;
        lastOperation = operatorButton.textContent;
      }
      newResult = true;
    } 
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
  if ((operand1 !== null) && (operand2 !== null)) {
    let result = computeResult(operand1, operand2, lastOperation);
      
    if (result === null) {
      alert("Error: Division by 0 is impossible!");
      operand1 = null;
      operand2 = null;
      lastOperation = null;
    } else {
      displayParagraph.textContent = "";
      displayParagraph.textContent = result.toString();

      operand1 = result;
      operand2 = null;
      lastOperation = null;
    }
    newResult = true;
  }
});

clearButton.addEventListener("click", () => {
  operand1 = null;
  operand2 = null;
  lastOperation = null;
  displayParagraph.textContent = "0";
  firstDigitClick = true;
  firstDecimalSepClick = true;
  newResult = false;
  displayCleared = true;
});