src="Config.js"
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var t = setTimeout(startTime, 500);
    document.getElementById('txt').innerHTML = h + ":" + m;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}