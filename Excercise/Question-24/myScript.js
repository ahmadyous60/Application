function checkResult() {
    var examType = document.getElementById('examType').value;
    var totalMarks = document.getElementById('t_marks').value;

    if (examType === "Final-exam" && totalMarks >= 90) {
        document.getElementById('demo').innerHTML = 'Grade: A+';
    } 
    else if (examType !== "Final-exam" && totalMarks >= 89 && totalMarks <= 100) {
        document.getElementById('demo').innerHTML = 'true';
    } 
    else{
        document.getElementById('demo').innerHTML = 'false';
    }
}
