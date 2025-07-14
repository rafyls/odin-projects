function getComputerChoice() {
  let num = Math.random();
  num = num * 30;
  if ((num >= 0) && (num < 10)) {
    return "rock";
  } else if (((num >= 10) && (num < 20))) {
    return "paper";
  } else {
    // num in this case is greater than or equal to 20 and less than 30
    return "scissors";
  }
}