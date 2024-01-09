function capitalizeWords() {

    var inputString = document.getElementById('string').value;
    let words = inputString.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    let resultString = words.join(' ');

    document.getElementById('demo').innerHTML = "New String is: "+ resultString;
}
