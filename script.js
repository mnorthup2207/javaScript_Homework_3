// Assignment Code
var generateBtn = document.getElementById('generate');
var resultEl = document.getElementById("password");
var upperEl = document.getElementById("upper");
var lowerEl = document.getElementById("lower");
var symbolEl = document.getElementById("symbol");
var numberEl = document.getElementById("num");
var clippyEl = document.getElementById("clipboard");
var lengthEl = document.getElementById("long")

var passWordFinal = [];
var passCompile = []


// passWordIf();
generateBtn.addEventListener("click", passWordIf);
getRandomLowerCase();
getRandomUpperCase();
getRandomSymbol();
getRandomNumber();


function passWordIf() {
  // all
  if ((lowerEl.checked == true) && (upperEl.checked == true) && (symbolEl.checked == true) && (numberEl.checked == true)) {
    passCompile.push(getRandomLowerCase() + getRandomUpperCase() + getRandomSymbol() + getRandomNumber(parseInt()));
  }
  // no lower
  if ((lowerEl.checked == false) && (upperEl.checked == true) && (symbolEl.checked == true) && (numberEl.checked == true)) {

    passCompile.push(getRandomUpperCase() + getRandomSymbol() + getRandomNumber(parseInt()));
  }
  // no upper
  if ((lowerEl.checked == true) && (upperEl.checked == false) && (symbolEl.checked == true) && (numberEl.checked == true)) {
    passCompile.push(getRandomLowerCase() + getRandomSymbol() + getRandomNumber(parseInt()));
  }
  // no symbol
  if ((lowerEl.checked == true) && (upperEl.checked == true) && (symbolEl.checked == false) && (numberEl.checked == true)) {
    passCompile.push(getRandomLowerCase() + getRandomUpperCase() + getRandomNumber(parseInt()));
  }
  // no number
  if ((lowerEl.checked == true) && (upperEl.checked == true) && (symbolEl.checked == true) && (numberEl.checked == false)) {
    passCompile.push(getRandomLowerCase() + getRandomUpperCase() + getRandomSymbol());
  }


  console.log(passCompile);

}




// Rand Functions
function getRandomLowerCase() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
// console.log(getRandomLowerCase())
// upper case
function getRandomUpperCase() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
// console.log(getRandomUpperCase())
// lower case
function getRandomSymbol() {
  const symbolCase = "!@#$%&*()_-+=";
  return symbolCase[Math.floor(Math.random() * symbolCase.length)];
}
// console.log(getRandomSymbol())
// rand num
function getRandomNumber() {
  return [Math.floor(Math.random() * 10)];
}
// console.log(getRandomNumber())
