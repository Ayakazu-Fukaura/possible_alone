$(function() {
    function omikuji() {
     const cont = Math.ceil(Math.random()*4);
     if(cont == 1){
       $(".omikuji_name").html("大吉が出ました");
       $(".omikuji_text").html("大吉が出ました！おめでとうございます！");
       $(".omikuji_img").attr("src","/static/img/daikiti.png");
       
   }
       if(cont == 2){
       $(".omikuji_name").html("中吉が出ました");
       $(".omikuji_text").html("中吉が出ました！やったね！");
       $(".omikuji_img").attr("src","/static/img/tyukiti.png");
       
   }
       if(cont == 3){
       $(".omikuji_name").html("小吉が出ました");
       $(".omikuji_text").html("小吉が出ました！もうひとふんばり！");
       $(".omikuji_img").attr("src","/static/img/syokiti.png");
   }
       if(cont == 4){
       $(".omikuji_name").html("末吉が出ました");
       $(".omikuji_text").html("末吉が出ました！もうひとふんばり！");
       $(".omikuji_img").attr("src","/static/img/suekiti.png");
   }
    }
   
   
       $(".omiguji_btn").on("click",function () {
           omikuji();
       });


       function load_effect() {
        var element = document.getElementsByClassName('omikuji_img');
        if(!element) return; // 要素がない場合は終了
        
        for(var i = 0; i < element.length; i++) { 
          element[i].classList.add('is-show');
        }
      }
      setTimeout(load_effect, 600); // 600ミリ秒経過後に実行


       });









// document.getElementById("omikuji_btn").onclick = function() {
//     var rnd = Math.floor( Math.random() * 6 );
//     var omikuji;
//     if (rnd === 0) omikuji = "大吉";
//     if (rnd === 1) omikuji = "吉";
//     if (rnd === 2) omikuji = "中吉";
//     if (rnd === 3) omikuji = "小吉";
//     if (rnd === 4) omikuji = "末吉";
//     if (rnd === 5) omikuji = "凶";
//     alert(omikuji);
// }