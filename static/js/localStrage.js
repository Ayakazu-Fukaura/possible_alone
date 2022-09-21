// ここの関数を利用するには、
// htmlのheadに
// <script src="/static/js/localStrage.js"></script>
// を追記してください。

// （1）Web Storageの実装確認
// if (typeof sessionStorage === 'undefined') {
//     window.alert("このブラウザはWeb Storage機能が実装されていません");
// } else {
//     console.log("このブラウザはWeb Storage機能を実装しています");
//     var storage = localStorage;


//     // （2）sessionStorageへの格納
//     function setlocalStorage() {
//         console.log("初期taskをセット")
//         var tasks = [];
//         tasks = [["トイレ", "toilet.png"], ["顔洗い", "kao.png"], ["ごはん", "gohan.png"], ["かばん準備", "kaban.png"], ["はみがき", "hamigaki.png"], ["トイレ", "toilet.png"]];
//         // 値の入力
//         storage.setItem("tasks", JSON.stringify(tasks));
//         viewStorage();
//     }




//     // （3）sessionStorageからのデータの取得と表示
//     function viewStorage() {
//         var tasks = JSON.parse(storage.getItem("tasks"));
//         console.log("リストを表示します：" + tasks);
//     }



//     // （5）sessionStorageからすべて削除
//     function removeallStorage() {
//         storage.clear();
//         viewStorage();
//     }
// }




// （1）Web Storageの実装確認
if (typeof sessionStorage === 'undefined') {
    window.alert("このブラウザはWeb Storage機能が実装されていません");
} else {
    console.log("このブラウザはWeb Storage機能を実装しています");
    var storage = localStorage;


    // （2）sessionStorageへの格納
    function setlocalStorage() {
        console.log("初期taskをセット")
        var tasks = []
        tasks = [["トイレ", "toilet.png"], ["顔洗い", "kao.png"], ["ごはん", "gohan.png"], ["かばん準備", "kaban.png"], ["はみがき", "hamigaki.png"], ["トイレ", "toilet.png"]];
        // 値の入力
        storage.setItem("tasks", JSON.stringify(tasks));
        viewStorage();
    }

    function setlocalStorage() {
        var name = "";
        name = "久保建英";
        storage.setItem("name", JSON.stringify(name));
        viewStorage();
    }




    // （3）sessionStorageからのデータの取得と表示
    function viewStorage() {
        var tasks = JSON.parse(storage.getItem("tasks"));
        console.log("リストを表示します：" + tasks);
    }



    // （5）sessionStorageからすべて削除
    function removeallStorage() {
        storage.clear();
        viewStorage();
    }
}



