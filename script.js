let app = document.getElementById("opnap");
let visBox = document.querySelector("#vis-box");
let cls = document.getElementById("close");
let calDisp = document.getElementById("disp");

app.addEventListener("click" , ()=> {visBox.style.visibility = "visible"});
cls.addEventListener("click" , ()=> {visBox.style.visibility = "hidden"});

let currVal = "";
let preVal = "";
let currOper = "";

function appendNumber(number) {
            currVal += number;
            calDisp.innerText = `${preVal} ${currOper} ${currVal}`;
        }

function appendOperation(operation) {
    if (currVal === '') return;
    if (preVal !== '') {
        calculate(); 
    }
    currOper = operation;
    preVal = currVal;
    currVal = '';
    calDisp.innerText = `${preVal} ${currOper}`;
}

function calculate() {
    if (preVal === '' || currVal === '') return;
    let result;
    let prev = parseFloat(preVal);
    let current = parseFloat(currVal);

    switch (currOper) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currVal = result.toString();
    currOper = '';
    preVal = '';
    calDisp.innerText = currVal;
}

function clearDisplay() {
    currVal = '';
    preVal = '';
    currOper = '';
    calDisp.innerText = '';
}