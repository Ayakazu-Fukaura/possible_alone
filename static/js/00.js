$(function(){
    var name = "";
     storage.setItem("name", JSON.stringify(name));//これが本体
     name = JSON.parse(storage.getItem("name"));
     $(".input_text").text("村上裕都")
});