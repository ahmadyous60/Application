function isWithinRange() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var diffFrom100 = Math.abs(100 - num1);
    var diffFrom400 = Math.abs(400 - num1);
    
    if (diffFrom100 <= 20 || diffFrom400 <= 20) {
        document.getElementById('demo').innerHTML = 'true';
    } else {
        document.getElementById('demo').innerHTML = 'false';
    }
}

