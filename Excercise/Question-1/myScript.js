function getCurrentDate(){
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2 , '0');
    const day = currentDate.getDate().toString().padStart(2 , '0');
    const year = currentDate.getFullYear();
    document.getElementById("demo").innerHTML = month + "/" + day + "/" + year;

    const days = currentDate.getDay();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('demo1').innerHTML = "Today is: " + weekdays[days] + ".";

    let hours = currentDate.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = currentDate.getMinutes().toString().padStart(2 , '0');
    const seconds = currentDate.getSeconds().toString().padStart(2 , '0');
    const currentTime = hours + ' ' + ampm + ' : ' + minutes + ' : ' + seconds;
    document.getElementById('demo2').innerHTML = "Current time is: " + currentTime;
}
getCurrentDate(); 