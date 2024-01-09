function removeCharacter() {
    var str = document.getElementById('string1').value;
    var pos = parseInt(document.getElementById('pos').value);
    if (pos < 0 || pos >= str.length) {
        document.getElementById('demo').innerHTML = "Invalid position. String is: " + str;
    } else {
        var newString = str.slice(0, pos) + str.slice(pos + 1);
        document.getElementById('demo').innerHTML = "New String is: " + newString;
    }
}