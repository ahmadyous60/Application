function checkLeapYear() {
    var year = document.getElementById("Input").value;

    if (year % 4 === 0) {
        if(year % 100 === 0 || year % 400 === 0){
        document.getElementById('demo').innerHTML = year + " is a leap year!";
        }
    }
     else {
        document.getElementById('demo').innerHTML = year + " is not a leap year.";
    }
}
