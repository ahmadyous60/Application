
function Christmas() {
    var today = new Date();
    var date = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        date.setFullYear(date.getFullYear() + 1);
    }
    var one_day = 1000 * 60 * 60 * 24;
    var daysLeft = Math.ceil((date.getTime() - today.getTime()) / (one_day));
    document.getElementById("demo").innerHTML = daysLeft + " days left until Christmas!";
}