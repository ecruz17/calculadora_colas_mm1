let calcBtn = document.getElementById('calcBtn');
let resetBtn = document.getElementById('resetBtn');
let valueA = document.getElementById('valueA');
let valueB = document.getElementById('valueB');
let valueC = document.getElementById('valueC');

let inputA = document.getElementById('inputA');
let inputB = document.getElementById('inputB');

let inputAvalue = parseFloat(document.getElementById('inputA').value);
let inputBvalue = parseFloat(document.getElementById('inputB').value);

function calcP(valueA, valueB) {
    console.log(parseFloat(((valueA) / (valueB))));
    return parseFloat(((valueA) / (valueB)));
}

function convertToPercentage(value) {
    return parseFloat(value * 100);
}

function makeInt(value) {
    return parseInt(Math.round(value));
}

function formatPercentage(value) {
    return `${value}%`;
}

calcBtn.addEventListener('click', function () {

    let valueARes = makeInt(parseFloat(convertToPercentage(calcP(inputAvalue, inputBvalue))));

    valueA.innerHTML = `𝜌 = ${formatPercentage(valueARes)}`;
    valueB.innerHTML = 'popó';
    valueC.innerHTML = 'pupú';
    // console.log(parseFloat(inputAvalue + inputBvalue));
})

resetBtn.addEventListener('click', function () {
    inputA.value = '';
    inputB.value = '';
    document.location.reload();
})
