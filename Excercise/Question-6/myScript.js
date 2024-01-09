
function checkIfStartsWithJava(inputString) {
  return inputString.toLowerCase().startsWith('java');
}

function checkString() {
  let userInput = document.getElementById('inputString').value;
  let startsWithJava = checkIfStartsWithJava(userInput);

  if (startsWithJava) {
    document.getElementById('demo').textContent = 'The string starts with "Java".';
  } else {
    document.getElementById('demo').textContent = 'The string does not start with "Java".';
  }
}
