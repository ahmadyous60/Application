function calculateDifference() {
    const num = parseInt(document.getElementById('num').value);
    const targetNumber = 19;
    const absoluteDifference = Math.abs(num - targetNumber);

    if(num > targetNumber){
    document.getElementById('demo').innerHTML = "Difference is: " + 3 * absoluteDifference;
    }
    else{
        document.getElementById('demo').innerHTML = "Difference is: " + absoluteDifference;
    }
}
