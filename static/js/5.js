$(function () {
    // （1）Web Storageの実装確認
    if (typeof sessionStorage === 'undefined') {
        window.alert("このブラウザはWeb Storage機能が実装されていません");
    } else {
        window.alert("実装されてます");
    }

    // class'showUp'をdiv要素に追加
    $('.present_box').addClass('showUp');

    //4.000秒後に実行
    setTimeout(function () {
        $('.himawari').addClass('UP');
        $('.present').addClass('DOWN');
    }, 3000);


});
