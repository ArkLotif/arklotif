function startTime() {
    
    // *** Time *** //
    
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    
    minute = fixMinute(minute);
    
    if (twelveHour == true) {
        hour = twelveHourClock(hour);
    }
    else {
        hour = hour;
    }

    document.getElementById('Hour').innerHTML = hour;
    document.getElementById('Divider').innerHTML = divider;
    document.getElementById('Minute').innerHTML = minute;
    
    document.getElementById("Hour").style.fontSize =new timeFontSize = "px";
    
// *** Calendar *** //
    
    var day = today.getDay();
    var month = today.getMonth();
    var date = today.getDate();
    
    if (day == 0) {day = "Sunday,";}
    if (day == 1) {day = "Monday,";}
    if (day == 2) {day = "Tuesday,";}
    if (day == 3) {day = "Wednesday,";}
    if (day == 4) {day = "Thursday,";}
    if (day == 5) {day = "Friday,";}
    if (day == 6) {day = "Saturday,";}
    
    if (month == 0) {month = "January";}
    if (month == 1) {month = "February";}
    if (month == 2) {month = "March";}
    if (month == 3) {month = "April";}
    if (month == 4) {month = "May";}
    if (month == 5) {month = "June";}
    if (month == 6) {month = "July";}
    if (month == 7) {month = "August";}
    if (month == 8) {month = "September";}
    if (month == 9) {month = "October";}
    if (month == 10) {month = "November";}
    if (month == 11) {month = "December";}
    
    document.getElementById('Day').innerHTML = day;
    document.getElementById('Month').innerHTML = month;
    document.getElementById('Date').innerHTML = date;
    
    document.getElementById("Day").style.fontSize = calendarFontSize + "px";
    
    var t = setTimeout(startTime, 500);
}

function fixMinute(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function twelveHourClock(i) {
    if (i > 12) {i = i - 12};
    return i;
}