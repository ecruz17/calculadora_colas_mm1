let calcBtn = document.getElementById('calcBtn');
let resetBtn = document.getElementById('resetBtn');
let valueA = document.getElementById('valueA');
let valueB = document.getElementById('valueB');
let valueC = document.getElementById('valueC');

calcBtn.addEventListener('click', function () {
    valueA.innerHTML = 'pipí';
    valueB.innerHTML = 'popó';
    valueC.innerHTML = 'pupú';
})

resetBtn.addEventListener('click', function () {
    document.location.reload();
})
