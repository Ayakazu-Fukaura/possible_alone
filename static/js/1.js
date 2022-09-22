
function showClock1() {
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMin = nowTime.getMinutes();
    var nowSec = nowTime.getSeconds();
    var msg = "いまのじかんは、<br>" + nowHour + "時" + nowMin + "分" + nowSec + "秒" + "です。";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
}
setInterval('showClock1()', 1000);

$(function () {
    var name = JSON.parse(storage.getItem("name"));
    var sexial = JSON.parse(storage.getItem("sexial"));
    console.log(sexial);
    if (!name || name == "") {
        $(".title").text("みんな～ おはよう！");

    } else {
        if (sexial == "ちゃん") {
            $(".title").text(name + "ちゃん おはよう！");
        } else {
            $(".title").text(name + "くん おはよう！");
        }
    }


});



