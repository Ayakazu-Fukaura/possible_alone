# 使い方
## 準備
localStrage.js を読み込んでください
```javascript:タイトル
<script src="/static/js/localStrage.js"></script>
```
これで準備完了です


---
## コマンド
1. tasks を確認したいとき
```javascript:タイトル
viewStorage()
```
ブラウザの検証のConsoleに表示されるよ

---
3.tasks が変数として欲しいとき
```javascript:タイトル
var tasks = JSON.parse(storage.getItem("tasks"));
```
これでタスクの内容が初期値なら  
>tasks = ["トイレ", "顔洗い", "ごはん", "かばん準備", "はみがき", "トイレ"]  

となるよ