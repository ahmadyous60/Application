
function checkNumbers(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    if (num1 >= 50 && num1 <=99 || num2 >= 55 && num2 <=99) {
        document.getElementById('demo').innerHTML = 'true';
    }
    else{
        document.getElementById('demo').innerHTML = 'false';
    }
}
