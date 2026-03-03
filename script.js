//Function to test the click in the buttons
function inputPlus() {
    alert("apertado");
}

//Create a shortcut to use the value of the numbers
var valueNum0 = document.getElementById("number0").value;
var valueNum1 = document.getElementById("number1").value;
var valueNum2 = document.getElementById("number2").value;
var valueNum3 = document.getElementById("number3").value;
var valueNum4 = document.getElementById("number4").value;
var valueNum5 = document.getElementById("number5").value;
var valueNum6 = document.getElementById("number6").value;
var valueNum7 = document.getElementById("number7").value;
var valueNum8 = document.getElementById("number8").value;
var valueNum9 = document.getElementById("number9").value;

var resultNumber = document.getElementById("numberResult");

//Function to change the contend of the result that's display
function displayResult(num1, numb2) {

    result = num1 + numb2;

    resultNumber.textContent = "Resultado da operação é" + result;
}
