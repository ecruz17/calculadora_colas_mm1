// Reference site: https://www.stepbystepsolutioncreator.com/pr/multi

let calcBtn = document.getElementById('calcBtn');
let resetBtn = document.getElementById('resetBtn');
let valueA = document.getElementById('valueA');
let valueB = document.getElementById('valueB');
let valueC = document.getElementById('valueC');
let valueD = document.getElementById('valueD');
let valueE = document.getElementById('valueE');
let valueF = document.getElementById('valueF');
let valueG = document.getElementById('valueG');

let inputA = document.getElementById('inputA');
let inputB = document.getElementById('inputB');
let inputC = document.getElementById('inputC');
let inputD = document.getElementById('inputD');

function factorianNumber(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorianNumber(n - 1);
}

function calcP(valueA, valueB, s) {
    let res = (valueA / valueB) * s;
    return res * 100;
}

function calcP0(p) {
    return (1 - (p / 100)) * 100;
}

function calcLq(s, valueA, valueB, p0) {
    return ((1 / (factorianNumber(s - 1))) * (Math.pow(valueA / valueB, s)) * ((valueA * valueB) / Math.pow((s * valueB) - valueA, 2))) * (p0 / 100);
}

function calcLs(lq, valueA, valueB) {
    return lq + (valueA / valueB);
}

function calcWq(valueA, valueB) {
    return (valueA) / (valueB * (valueB - valueA));
}

function calcWs(ls, valueA) {
    return ls / valueA;
}

function calcPn(s, valueA, valueB, p0) {
    return ((1 / (factorianNumber(s))) * (valueA / valueB) * ((s * valueB) / (Math.pow(((s * valueB) - valueA), 2)))) * (p0 / 100)
}

function formatPercentage(value) {
    return `${value}%`;
}

calcBtn.addEventListener('click', function () {

    let inputAvalue = +document.getElementById('inputA').value;
    let inputBvalue = +document.getElementById('inputB').value;
    let inputCvalue = +document.getElementById('inputC').value;

    if (inputAvalue, inputBvalue, inputCvalue) {

        let p = Math.round(calcP(inputAvalue, inputBvalue, inputCvalue));
        let p0 = calcP0(p);
        let s = inputCvalue;

        let valueARes = Math.round(calcP(inputAvalue, inputBvalue, s));
        let valueBRes = Math.round(calcP0(p).toString());
        let valueLqRes = Math.round((calcLq(s, inputAvalue, inputBvalue, p0) + Number.EPSILON) * 100) / 100;
        let valueLsRes = Math.round(calcLs(valueLqRes, inputAvalue, inputBvalue));
        let wqRes = Math.round((calcWq(inputAvalue, inputBvalue) + Number.EPSILON) * 100) / 100;
        let wsRes = calcWs(valueLsRes, inputAvalue).toString().substring(0, 7);
        let pnRes = calcPn(s, inputAvalue, inputBvalue, p0).toString().substring(0, 7);

        valueA.innerHTML = `p = ${formatPercentage(valueARes)}`;
        valueB.innerHTML = `p0 = ${formatPercentage(valueBRes)}`;
        valueC.innerHTML = `Lq = ${valueLqRes}`;
        valueD.innerHTML = `Ls = ${valueLsRes}`;
        valueE.innerHTML = `Wq = ${wqRes}`;
        valueF.innerHTML = `Ws = ${wsRes}`;
        valueG.innerHTML = `Ws = ${formatPercentage(pnRes)}`;
    } else {
        valueA.innerHTML = ``;
        valueB.innerHTML = ``;
        valueC.innerHTML = ``;
        valueD.innerHTML = ``;
        valueE.innerHTML = ``;
        valueF.innerHTML = ``;
        valueG.innerHTML = ``;
        Swal.fire({
            icon: 'error',
            title: 'Uy',
            text: 'Por favor rellena todos los campos necesarios',
        })
    }
});

resetBtn.addEventListener('click', function () {
    inputA.value = '';
    inputB.value = '';
    inputC.value = '';
    valueA.innerHTML = '';
    valueB.innerHTML = '';
    valueC.innerHTML = '';
    valueD.innerHTML = '';
    valueE.innerHTML = '';
    valueF.innerHTML = '';
    valueG.innerHTML = '';
})
