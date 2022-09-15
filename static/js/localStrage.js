
// （1）Web Storageの実装確認
if (typeof sessionStorage === 'undefined') {
    window.alert("このブラウザはWeb Storage機能が実装されていません");
} else {
    console.log("このブラウザはWeb Storage機能を実装しています");
    var storage = localStorage;


    // （2）sessionStorageへの格納
    function setlocalStorage() {
        console.log("初期taskをセット")
        var tasks = ["トイレ", "顔洗い", "ごはん", "かばん準備", "はみがき", "トイレ"];
        // 値の入力
        storage.setItem("tasks", tasks);
        viewStorage();
    }

    // （3）sessionStorageからのデータの取得と表示
    function viewStorage() {
        var tasks = storage.getItem("tasks");
        console.log("リストを表示します：" + tasks);
    }



    // （5）sessionStorageからすべて削除
    function removeallStorage() {
        storage.clear();
        viewStorage();
    }
}


