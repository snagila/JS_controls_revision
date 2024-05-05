let output = document.getElementById("output");
let output2 = document.getElementById("output2");

// IF STATEMENT

const weekend = true;
if (weekend) {
  output.textContent = " come to the class";
}
if (!weekend) {
  output.textContent = "sleep at home";
}

// IF ELSE STATEMENT

// find if a number is even or odd

const num = 4;
if (num % 2 === 0) {
  output.textContent = "It is even number";
} else {
  output.textContent = "It is odd number";
}

// IF-ELSE-IF STATEMENT
// implementing grading application using if-else-if

const grade = 70;

if (grade >= 90) {
  output.textContent = "Brilliant!!, A+ Grade";
} else if (grade >= 80) {
  output.textContent = "Excellent!! A Grade";
} else if (grade >= 70) {
  output.textContent = " Good!! B Grade";
} else {
  output.textContent = "LOL!! you failed";
}

// build a pricing catalogue for these items : monitor, mouse , keyboard,cpu,printer
const item = "mouse";

if (item === "mouse") {
  output.textContent = " The price is $80";
} else if (item === "monitor") {
  output.textContent = "The price is $150";
} else if (item === "keyboard") {
  output.textContent = "The price is $10";
} else if (item === "printer") {
  output.textContent = "The price is $40";
} else {
  output.textContent = "item not found";
}

// SWITCH statement
const items = "mouse";
switch (items) {
  case "monitor":
    output.textContent = "The price is $150";
    break;
  case "mouse":
    output.textContent = "The price is $80";
    break;
  case "cpu":
    output.textContent = "The price is $1500";
    break;
  default:
    output.textContent = "No value";
}

// TERNARY OPERATOR
2 === 2 ? "true" : "false";

4 % 2 === 0
  ? (output.textContent = "It is even number")
  : (output.textContent = "It is odd number");

// NESTING CONTROLS -if

const israining = true;
const iswindy = false;
if (israining) {
  output.textContent = "it is raining.";
  if (iswindy) {
    output2.textContent = "it is also windy";
  } else {
    output2.textContent = "it is not windy";
  }
} else {
  output2.textContent = "it is not windy";
}

//
