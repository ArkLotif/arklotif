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

    document.getElementById('Time').innerHTML = hour + divider + minute;
    
    document.getElementById('Time').style.fontSize = timeFontSize + "px";
    
    document.getElementById('Time').style.color = textColor;
}

function fixMinute(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function twelveHourClock(i) {
    if (i > 12) {i = i - 12};
    return i;
}