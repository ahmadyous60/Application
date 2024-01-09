function convertion() {
    var number = document.getElementById('num').value;
    if (isNaN(number) || number < 0) {
        document.getElementById('demo').innerHTML = 'Invalid Input';
    } 
    else {
        var hours = Math.floor(number / 60);
        var minutes = number % 60;
        document.getElementById('demo').innerHTML = hours + " hours and " + minutes + " minutes";
    }
}
