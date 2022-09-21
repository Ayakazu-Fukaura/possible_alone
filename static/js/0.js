$(function() {
    var sexial = "男";
    var name = "";
    $('.Button-style').on('click', function() {
        sexial = $('input:radio[name="c1"]:checked').val();
        viewStorage("sexial");

        name = $(".text").val();
        console.log(name)

        window.location.href = "/00";
        storage.setItem("sexial", JSON.stringify(sexial));
        storage.setItem("name", JSON.stringify(name));//これが本体
      })



  });