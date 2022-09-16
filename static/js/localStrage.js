
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
        var img = new Image();
        img.src = "/static/img/toilet.png"

        var img = new Image();
        img.src = "/static/img/kao.png"
        
        var img = new Image();
        img.src = "/static/img/gohan.png"

        var img = new Image();
        img.src = "/static/img/kaban.png"

        var img = new Image();
        img.src = "/static/img/hamigaki.png"


        img.load = function() {
            var canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            var context = canvas.getContext('2d');
            context.drawImage(img, 0, 0);
            var data = context.getImageData(x, y, img.width, img.height).data;
            localStorage.setItem('image', JSON.stringify(data)); // save image data
        }
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


