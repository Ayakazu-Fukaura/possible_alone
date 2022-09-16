$(function () {

    setlocalStorage();
});

function showClock1() {
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMin  = nowTime.getMinutes();
    var nowSec  = nowTime.getSeconds();
    var msg = "いまのじかんは、" + nowHour + "時" + nowMin + "分" + nowSec + "秒" +"です。";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
 }
 setInterval('showClock1()',1000);

$(function () {
    setlocalStorage();
var crrent_task = 0
storage.setItem("crrent_task", JSON.stringify(crrent_task));
});


$(function () {
    setlocalStorage();
var toilet_task = -1
storage.setItem("toilet_task", JSON.stringify(toilet_task));
console.log(toilet_task)
});
