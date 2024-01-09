function NewString() {
    var string = document.getElementById('string').value; 
    const lastthreechar = string.slice(-3);
    const NewString = lastthreechar + ' '  + string + ' ' + lastthreechar;

    document.getElementById('demo').innerHTML = " New string is: "+NewString;
}

