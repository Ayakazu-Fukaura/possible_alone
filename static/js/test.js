$(function () {
    console.log("実験場");
    // removeallStorage();
    // viewStorage("tasks");
    var i = 0;
    var all_task = [];
    all_task = JSON.parse(storage.getItem("all_task"));;
    var tasks = [];
    tasks = JSON.parse(storage.getItem("tasks"));

    if (!all_task) {
        all_task = [["トイレ", "toilet.png"], ["ごはん", "gohan.png"], ["はみがき", "hamigaki.png"], ["かばん準備", "kaban.png"], ["顔洗い", "kao.png"],];
        setlocalStorage("all_task", all_task);
        console.log("all_taskを初期設定しました");
    }
    viewStorage("all_task");
    if (!tasks) {
        tasks = [["トイレ", "toilet.png"], ["顔洗い", "kao.png"], ["しょくじ", "gohan.png"], ["かばん準備", "kaban.png"], ["はみがき", "hamigaki.png"], ["トイレ", "toilet.png"]];
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

    // ドラッグテーブル表示
    Sortable.create(content, {
        animation: 150,
    });

    // 新しいタスクを保存
    $('#submit').click(function () {
        var target = $(content).children();
        tasks = [];
        // console.log(target.length);
        for (i = 0; i < target.length; i++) {
            tasks.push([target.eq(i).text(), ".jpg"]);
        }
        setlocalStorage("tasks", tasks);
    })

})