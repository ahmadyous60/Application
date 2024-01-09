function mul() {
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML ="Multiplication is: "+num1 * num2;
}
function divide() {
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML ="Division is: "+ num1 / num2;
}
