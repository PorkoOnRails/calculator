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
//The function called .split i don't understand how it works but tomorrow i will learn it and
//Change if necessary, the corrector who give me this 'tip' that resolve this problem
function displayResult() {
    if (resultNumber.textContent.includes("+")) {
        result = previusresult + Number(resultNumber.textContent.split("+")[1]);
    } else if (resultNumber.textContent.includes("-")) {
        result = previusresult - Number(resultNumber.textContent.split("-")[1]);
    } else if (resultNumber.textContent.includes("*")) {
        result = Number(previusresult) * Number(resultNumber.textContent.split("*")[1]);
    } else if (resultNumber.textContent.includes("/")) {
        result = Number(previusresult) / Number(resultNumber.textContent.split("/")[1]);
    }
    
    return resultNumber.textContent = result;
}

//Declaring the variables to be used in the functions
var previusresult = 0;

//Functions to change the operator
function sum() {
    previusResult();
    resultNumber.textContent = "+";
}
function minus() {
    previusResult();
    resultNumber.textContent = "-";
}
function multiply() {
    previusResult();
    resultNumber.textContent = "*";
}
function divided() {
    previusResult();
    resultNumber.textContent = "/";
}

//Change the variable previusresult to the current result
function previusResult() {
    return previusresult = Number(resultNumber.textContent);
}

//Functions to clear the result
function clearResult() {
    resultNumber.textContent = "0";
}
function clearResultAll() {
    resultNumber.textContent = "";
}

//Functions to add the numbers to be calcuted in the worst way
function addNumberToBeCalcuted1() {
    resultNumber.textContent += "1";
}
function addNumberToBeCalcuted2() {
    resultNumber.textContent += "2";
}
function addNumberToBeCalcuted3() {
    resultNumber.textContent += "3";
}
function addNumberToBeCalcuted4() {
    resultNumber.textContent += "4";
}
function addNumberToBeCalcuted5() {
    resultNumber.textContent += "5";
}
function addNumberToBeCalcuted6() {
    resultNumber.textContent += "6";
}
function addNumberToBeCalcuted7() {
    resultNumber.textContent += "7";
}
function addNumberToBeCalcuted8() {
    resultNumber.textContent += "8";
}
function addNumberToBeCalcuted9() {
    resultNumber.textContent += "9";
}
function addNumberToBeCalcuted0() {
    resultNumber.textContent += "0";
}