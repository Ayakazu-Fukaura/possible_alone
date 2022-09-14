$(function () {

    // class'showUp'をdiv要素に追加
    $('.present_box').addClass('showUp');

    //4.000秒後に実行
    setTimeout(function () {
        // $('.present').attr('src', 'static/img/seed_of_himawari.png');
        $('.himawari').addClass('UP');
        $('.present').addClass('DOWN');
    }, 3000);


});
