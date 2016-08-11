function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    h = twelveHour(h);
    document.getElementById('Hour').innerHTML = h;
    document.getElementById('Divider').innerHTML = divider;
    document.getElementById('Minute').innerHTML = m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function twelveHour(i) {
    if (i > 12) {i = i - 12};
    return i;
}