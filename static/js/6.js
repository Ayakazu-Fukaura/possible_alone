$(function () {

    $(".btn").on("click", function () {
        puresent();
    });

    var name = JSON.parse(storage.getItem("name"));
    var sexial = JSON.parse(storage.getItem("sexial"));
    console.log(sexial);
    if (!name || name == "") {
        $(".oisii a").html("みんなも<br>しゅっぱつ！！");

    } else {
        $(".oisii a").html(name + sexial + "も<br>しゅっぱつ！！");
    }



});

function puresent() {
    $('.btn').addClass('DOWN');
    $('.himawari').addClass('UP');
    $('.hum').attr('src', '/static/img/yatta_ham.png')
    setTimeout(function () {
        $('.hum').attr('src', '/static/img/humhum_ham.png')
        $('.oisii').addClass('UP');
    }, 3000);

}