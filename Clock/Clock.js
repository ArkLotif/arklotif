function startTime() {
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

    if (lightMode == true) {
        document.getElementById('Time').style.color = "#fff";
        document.getElementById('Clock').style.background = "rgba(255,255,255," + backgroundAlpha + ")";
    }
    else {
        document.getElementById('Time').style.color = "#1a1a1a";
        document.getElementById('Clock').style.background = "rgba(20,20,20," + backgroundAlpha + ")";
    }

    document.getElementById('Time').style.fontSize = timeFontSize + "px";

    document.getElementById('Clock').style.borderRadius = borderRadius + "px";

    document.getElementById('Time').innerHTML = hour + divider + minute;
}

function fixMinute(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function twelveHourClock(i) {
    if (i > 12) {i = i - 12};
    return i;
}