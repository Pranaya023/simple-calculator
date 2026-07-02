function getValues() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML =
        "Result: Please enter both numbers.";
        return null;
    }

    return {num1, num2};
}

function add() {

    let values = getValues();

    if(values){
        let answer = values.num1 + values.num2;
        document.getElementById("result").innerHTML =
        "Result: " + answer;
    }
}

function subtract() {

    let values = getValues();

    if(values){
        let answer = values.num1 - values.num2;
        document.getElementById("result").innerHTML =
        "Result: " + answer;
    }
}

function multiply() {

    let values = getValues();

    if(values){
        let answer = values.num1 * values.num2;
        document.getElementById("result").innerHTML =
        "Result: " + answer;
    }
}

function divide() {

    let values = getValues();

    if(values){

        if(values.num2 === 0){
            document.getElementById("result").innerHTML =
            "Result: Cannot divide by zero";
            return;
        }

        let answer = values.num1 / values.num2;
        document.getElementById("result").innerHTML =
        "Result: " + answer;
    }
}