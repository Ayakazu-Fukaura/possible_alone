$(function () {
    //初期タスクセット
    // console.log("タスクを初期設定で固定します");
    // var tasks = [];
    // tasks = [["トイレ", "toilet.png"], ["顔洗い", "kao.png"], ["ごはん", "gohan.png"], ["かばん準備", "kaban.png"], ["はみがき", "hamigaki.png"], ["トイレ", "toilet.png"]];
    // setlocalStorage("tasks", tasks);
    var i = 0;
    var all_task = [];
    all_task = JSON.parse(storage.getItem("all_task"));;
    var tasks = [];
    tasks = JSON.parse(storage.getItem("tasks"));

    //タスクデータがなければ初期化
    if (!all_task) {
        all_task = [["トイレ", "toilet.png"], ["ごはん", "gohan.png"], ["はみがき", "hamigaki.png"], ["かばん準備", "kaban.png"], ["顔洗い", "kao.png"],];
        setlocalStorage("all_task", all_task);
        console.log("all_taskを初期設定しました");
    }
    viewStorage("all_task");
    if (!tasks) {
        tasks = [["トイレ", "toilet.png"], ["顔洗い", "kao.png"], ["ごはん", "gohan.png"], ["かばん準備", "kaban.png"], ["はみがき", "hamigaki.png"], ["トイレ", "toilet.png"]];
        setlocalStorage("tasks", tasks);
        console.log("tasksを初期設定しました");
    }
    viewStorage("tasks");


    //タスクリストを表示
    for (i = 0; i < tasks.length; i++) {
        // $('#content').append('<div><div>' + tasks[i][0] + '</div><img src="/static/img/pink_yajirusi.png" alt="写真"><div>');
        $('#content').append('<div>' + tasks[i][0] + '</div>');
    }
    // 矢印表示
    for (i = 0; i < tasks.length - 1; i++) {
        $('#yazirusi').append('<img src="/static/img/pink_yajirusi.png" alt="矢印">');
    }
    // $('.content').append('<div>' + tasks[0][0] + '</div>');
    // for (let i = 1; i < tasks.length; i++) {
    //     $('.content').append('<img src="/static/img/pink_yajirusi.png" alt="写真"><div>' + tasks[i][0] + '</div>');

    // }

    // ドラッグテーブル表示
    Sortable.create(content, {
        animation: 150,
    });
});