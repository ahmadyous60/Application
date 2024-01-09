function manipulateString() {
    
    var inputString = document.getElementById('string').value;

    if (inputString.length > 3) {
        var firstThreeChars = inputString.substring(0, 3).toLowerCase();
        var restOfString = inputString.substring(3);
        document.getElementById('demo').innerHTML = 'New String is: ' + firstThreeChars + restOfString;
    } 
    else {
        document.getElementById('demo').innerHTML = 'New String is: ' + inputString.toUpperCase();
    }
}
