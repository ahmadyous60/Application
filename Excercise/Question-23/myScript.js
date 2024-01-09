
function checkNumbers() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = parseInt(document.getElementById('num3').value);

    if (num1 === num2 && num2 === num3) {
        document.getElementById('demo').innerHTML = '30';
    } 
    else if (num1 === num2 || num1 === num3 || num2 === num3) {
        document.getElementById('demo').innerHTML = '20';
    }    
    else {
        document.getElementById('demo').innerHTML = '40';
    }
}
