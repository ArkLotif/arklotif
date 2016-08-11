function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    
    m = fixMinute(m);
    
    if (twelveHour = true) {
        h = twelveHourClock(h);
    }

    document.getElementById('Hour').innerHTML = h;
    document.getElementById('Divider').innerHTML = divider;
    document.getElementById('Minute').innerHTML = m;
}

function fixMinute(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function twelveHourClock(i) {
    if (i > 12) {i = i - 12};
    return i;
}