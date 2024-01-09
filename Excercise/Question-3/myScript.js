function checkGuess() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    const userGuess = document.getElementById("guess").value;
    
    const messageElement = document.getElementById("demo");

    if (userGuess == randomNumber) {
        messageElement.innerHTML = "Good Work!";
    } else {
        messageElement.innerHTML = "Not matched. The correct number was " + randomNumber;
    }
}
