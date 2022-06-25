
let barcodeInput = document.getElementById('barcodeInput');
let btnBarcode = document.getElementById('btnBarcode');
let msgDiv = document.getElementById('msg');


btnBarcode.addEventListener('click', checkBarcodeFunc);

function checkBarcodeFunc() {
    let oddSum = 0;
    let evenSum = 0;
    let value = barcodeInput.value;
    if (value.length !== 13) {
        showMessage('enter 13 digit', 'red')
        return;
    }

    let lastDigit = +(value[value.length - 1]);
    value = value.substring(0, value.length - 1);
    for (let i in value) {
        i % 2 !== 0 ? evenSum += +value[i] : oddSum += +value[i]
    }
    let compareValue = (evenSum * 3) + oddSum;
    compareValue = 10 - compareValue % 10;
    if (compareValue === lastDigit) {
        showMessage('Barcode is correct', 'green');
    }
    else {
        showMessage('Barcode is incorrect', 'red');

    }

}
function showMessage(msg, color) {
    msgDiv.innerHTML = msg;
    msgDiv.className = color;
    setTimeout(() => {
        msgDiv.innerHTML = ''
    }, 2000);
}
