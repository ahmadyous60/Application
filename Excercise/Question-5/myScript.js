function getDifference(num) {
    if (num > 13) {
      return (num - 13) * 2 ;
    } 
    
    else {
      return num - 13;
    }
  }
  
  function calculateDifference() {
    var inputNumber = document.getElementById("numberInput").value;
    var result = getDifference(inputNumber);
    document.getElementById("demo").innerHTML = "The difference is: " + result;
  }
  