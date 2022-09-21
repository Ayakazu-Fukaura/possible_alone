$(function(){
    var sexial = "男";
    var name = "";
    sexial = JSON.parse(storage.getItem("sexial"))
    name = JSON.parse(storage.getItem("name"));
    $(".input_text").val(name)
    $(".kun").val(sexial)
});