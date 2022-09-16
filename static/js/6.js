$(function () {



    // // class'showUp'をdiv要素に追加
    // $('.present_box').addClass('showUp');

    // //4.000秒後に実行
    // setTimeout(function () {
    //     $('.himawari').addClass('UP');
    //     $('.present').addClass('DOWN');
    // }, 3000);

    // viewStorage();

});

function puresent() {
    $('#button').addClass('DOWN');
    $('.himawari').addClass('UP');
    $('.hum').attr('src', '/static/img/yatta_ham.png')
    setTimeout(function () {
        $('.hum').attr('src', '/static/img/humhum_ham.png')
    }, 1000);
}