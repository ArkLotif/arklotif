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
    
    document.getElementById("Time").style.fontSize = timeFontSize + "px";
    
// *** Calendar *** //
    
    var day = today.getDay();
    var month = today.getMonth();
    var date = today.getDate();
    
    if (day == 3) {
        day = "Wednesday";
    }
    
    document.getElementById('Day').innerHTML = day;
    document.getElementById('Month').innerHTML = month;
    document.getElementById('Date').innerHTML = date;
    
    document.getElementById("Time").style.fontSize = calendarFontSize + "px";
}

function fixMinute(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function twelveHourClock(i) {
    if (i > 12) {i = i - 12};
    return i;
}