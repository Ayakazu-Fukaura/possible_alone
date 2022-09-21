$(function () {
    //初期タスクセット
    console.log("タスクを初期設定で固定します");
    var tasks = [];
    tasks = [["トイレ", "toilet.png"], ["顔洗い", "kao.png"], ["ごはん", "gohan.png"], ["かばん準備", "kaban.png"], ["はみがき", "hamigaki.png"], ["トイレ", "toilet.png"]];
    setlocalStorage("tasks", tasks);
    tasks = JSON.parse(storage.getItem("tasks"));
    $('.content').append('<div>' + tasks[0][0] + '</div>');
    for (let i = 1; i < tasks.length; i++) {
        $('.content').append('<img src="/static/img/pink_yajirusi.png" alt="写真"><div>' + tasks[i][0] + '</div>');

    }
});