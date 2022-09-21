$(function () {
    console.log("実験場");
    removeallStorage();
    var all_task = [["トイレ", "toilet.png"], ["ごはん", "gohan.png"], ["はみがき", "hamigaki.png"], ["かばん準備", "kaban.png"], ["顔洗い", "kao.png"],];
    setlocalStorage("all_task", all_task);
})