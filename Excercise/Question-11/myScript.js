function computeSum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (num1 === num2) {
        document.getElementById('result').innerHTML ="Triple Sum is: "+ 3 * (num1 + num2);
    } else {
        document.getElementById('result').innerHTML ="Sum is: "+ (num1 + num2);
    }
}

  