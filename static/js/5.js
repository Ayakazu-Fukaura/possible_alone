$(function () {
    // class'showUp'をdiv要素に追加
    $('.present_box').addClass('showUp');

    //4.000秒後に実行
    setTimeout(function () {
        $('.himawari').addClass('UP');
        $('.present').addClass('DOWN');
    }, 3000);

    viewStorage();

});
