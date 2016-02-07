src="Config.js"
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (TwelveHour == true) {h = TwelveTime(h)};
    var t = setTimeout(startTime, 500);
    document.getElementById("txt").innerHTML = h + ":" + m;
    document.getElementById("txt").style.paddingTop = TopPadding + "px";
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function TwelveTime(h) {
    if (h >= 12) {h = h - 12};
    if (h == 0) {h = 12};
    return h;
}