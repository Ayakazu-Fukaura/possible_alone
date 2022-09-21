$(function() {
    $('.Button-style').on('click', function() {
        var name = "";
        name = "久保建英";
        storage.setItem("name", JSON.stringify(name));//これが本体
        const str1 = $(".text").val(); // テキストボックスのvalue値を取得
    $("#span1").text(str1); // spanタグに値を設定
        
        window.location.href = "/00";
      })      
  });