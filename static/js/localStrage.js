// ここの関数を利用するには、
// htmlのheadに
// <script src="/static/js/localStrage.js"></script>
// を追記してください。


// （1）Web Storageの実装確認
if (typeof sessionStorage === 'undefined') {
    window.alert("このブラウザはWeb Storage機能が実装されていません");
} else {
    console.log("このブラウザはWeb Storage機能を実装しています");
    var storage = localStorage;


    // （2）sessionStorageへの格納
    function setlocalStorage(keyword, variable) {
        console.log("初期taskをセット");
        // 値の入力
        storage.setItem(keyword, JSON.stringify(variable));
        viewStorage();
    }

    // function setlocalStorage() {
    //     var name = "";
    //     name = "久保建英";
    //     storage.setItem("name", JSON.stringify(name));
    //     viewStorage();
    // }




    // （3）sessionStorageからのデータの取得と表示
    function viewStorage(keyword = "") {
        if (keyword == "") {
            var tasks = JSON.parse(storage.getItem("tasks"));
            console.log("tasksの中身；" + tasks);
        } else {
            var variable = JSON.parse(storage.getItem(keyword));
            console.log("keyword(" + keyword + ")の結果：" + variable);

        }
    }



    // （5）sessionStorageからすべて削除
    function removeallStorage() {
        storage.clear();
        viewStorage();
    }
}



