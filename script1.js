// Assignment Code
var generateBtn = document.getElementById('generate');
var resultEl = document.getElementById("password");
var upperEl = document.getElementById("upper");
var lowerEl = document.getElementById("lower");
var symbolEl = document.getElementById("symbol");
var numberEl = document.getElementById("num");
const clipboard = document.getElementById('clipboard');
var lengthEl = document.getElementById("long")
var submitToStore = document.getElementById("store")
var passList = document.getElementById("stored")

var passwordBank = []


var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

function renderBank() {
	for (var i = 0; i < passwordBank.length; i++) {
		var input = passwordBank[i];
	
		var li = document.createElement("li");
		li.textContent = input;
		passList.appendChild(li);
	  }
};

submitToStore.addEventListener("click", function(event) {
	event.preventDefault();

	var input = resultEl.innerText;
	passwordBank.push(input);
	renderBank();


})


clipboard.addEventListener('click', () => {
	var textarea = document.createElement('textarea');
	var password = resultEl.innerHTML;
	
	if(!password) { return; }
	
	textarea.value = passwowhiterd;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	var length = +lengthEl.value;
	var hasLower = lowerEl.checked;
	var hasUpper = upperEl.checked;
	var hasNumber = numberEl.checked;
	var hasSymbol = symbolEl.checked;
	var redAlert1 = document.querySelectorAll("label");
	redAlert1[1].setAttribute("style", "color: white;")
	redAlert1[2].setAttribute("style", "color: white;")
	redAlert1[3].setAttribute("style", "color: white;")
	redAlert1[4].setAttribute("style", "color: white;")
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
	var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		var redAlert1 = document.querySelectorAll("label");
		redAlert1[1].setAttribute("style", "color: red;")
		redAlert1[2].setAttribute("style", "color: red;")
		redAlert1[3].setAttribute("style", "color: red;")
		redAlert1[4].setAttribute("style", "color: red;")
		
		
		alert("Please select at least one variable");
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			var funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	var finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}
// Rand Functions
function getRandomLower() {
	var lowerCase = "abcdefghijklmnopqrstuvwxyz";
	return lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  // console.log(getRandomLowerCase())
  // upper case
  function getRandomUpper() {
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
  