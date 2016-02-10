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
    document.getElementById("txt").style.fontSize = FontSize + "px";
    document.getElementById("txt").style.color = "#" + TextColor;
    document.getElementById("txt").style.opacity = Opacity;
    if (ThreeDimensionalText == true) {document.getElementById("txt").style.textShadow = 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15)};
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