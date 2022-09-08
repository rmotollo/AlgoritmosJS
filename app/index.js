let currentNumber = document.getElementById('currentnumber').innerHTML;
let btnIncrementa = document.getElementById('btnincrementa');
let btnDecrementa = document.getElementById('btndecrementa');


btnDecrementa.addEventListener('click', () => {
    document.getElementById('currentnumber')
    .innerHTML = currentNumber--;
});

btnIncrementa.addEventListener('click', () => {
    document.getElementById('currentnumber')
    .innerHTML = currentNumber++;
});

