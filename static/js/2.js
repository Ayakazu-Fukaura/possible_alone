$(function () {
    //初期タスクセット
    setlocalStorage();

    //crrent_taskを初期化
    var crrent_task = 0
    storage.setItem("crrent_task", JSON.stringify(crrent_task));

    //タスクリストを表示
    var tasks = [];
    tasks = JSON.parse(storage.getItem("tasks"));
    $('.content').append('<div>' + tasks[0][0] + '</div>');
    for (let i = 1; i < tasks.length; i++) {
        $('.content').append('<img src="/static/img/pink_yajirusi.png" alt="写真"><div>' + tasks[i][0] + '</div>');

    }
});