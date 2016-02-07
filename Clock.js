src="Config.js"
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = TwelveTime(h);
    var t = setTimeout(startTime, 500);
    document.getElementById('txt').innerHTML = h + ":" + m;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function TwelveTime(h) {
    if (h >= 12) {h = h - 12};
    return h;
}