

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
        tasks = ["トイレ", "顔洗い", "ごはん", "かばん準備", "はみがき", "トイレ"];
        // 値の入力
        storage.setItem("tasks", JSON.stringify(tasks));
        viewStorage();
    }

    function setlocalStorage() {
        var name = "";
        var icon = []
        var man_woman = []
        man_woman = ["くん", "ちゃん"]
        icon = ["Character_btn" = 0]
        name = "text" = 0
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
        tasks = ["きがえ", "かおあらい", "ごはん", "かばんようい", "はみがき", "トイレ"];
        // 値の入力
        storage.setItem("tasks", JSON.stringify(tasks));
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



