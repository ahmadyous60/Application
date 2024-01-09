
function checkMultiple() {
    var num = parseInt(document.getElementById('num').value);
    if(num % 3 === 0){
        document.getElementById('demo').innerHTML = "Given number is the Multiple of 3";
    }
    else if(num % 7 === 0){
        document.getElementById('demo').innerHTML ="Given number is the multiple of 7";
    }
    else{
        document.getElementById('demo').innerHTML = "Given number is not the multiple of 3 and 7";
    }
}