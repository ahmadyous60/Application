
function checkNumbers() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        document.getElementById('demo').innerHTML = 'True';
    } else {
        document.getElementById('demo').innerHTML = 'False';
    }
}
