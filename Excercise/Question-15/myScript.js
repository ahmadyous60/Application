function addPyPrefix() {
    var string = document.getElementById('string1').value; 
    if (string.startsWith("Py")) {
        document.getElementById('demo').innerHTML = "String is: "+ string;
    } else {
        document.getElementById('demo').innerHTML = "New String is:" + ' Py ' + string;
    }
}
