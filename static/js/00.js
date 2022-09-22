$(function(){
    var sexial = "男";
    var name = "";
    var local_src = "";
    sexial = JSON.parse(storage.getItem("sexial"));
    name = JSON.parse(storage.getItem("name"));
    local_src = JSON.parse(storage.getItem("local_src"))
    $(".input_text").val(name)
    $(".kun").val(sexial)
    $('.img').attr('src', local_src);
});