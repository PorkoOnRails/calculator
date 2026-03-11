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
//The function called .split to split the string in the operator and the number to be calcuted, then it uses the operator to know which operation to do and return the result
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
    //Just make this to fit and look better
        else if (resultNumber.textContent.includes("%")) {
        result = Number(previusresult) * (Number(resultNumber.textContent.split("%")[1]) / 100);
    }

    return resultNumber.textContent = result;
}


//Function to erase the last number is with .slice(0, -1) because is a string not a number otherwise I would use .pop()
function eraseLast() {
    previusresult = resultNumber.textContent.slice(0, -1);
    resultNumber.textContent = previusresult;
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
function percentage() {
    previusResult();
    resultNumber.textContent = "%";
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