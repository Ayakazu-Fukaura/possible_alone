$(function() {
    var local_src = "";
    var sexial = "男";
    var name = "";
    $('.Button-style').on('click', function() {
        sexial = $('input:radio[name="c1"]:checked').val();
        name = $(".text").val();
        window.location.href = "/00";

        storage.setItem("sexial", JSON.stringify(sexial));
        storage.setItem("name", JSON.stringify(name));//これが本体
      })

    $('#Character_btn button').on('click', function(){
        local_src = this.children[0].children[0].getAttribute("src")
        
        storage.setItem("local_src", JSON.stringify(local_src));
        
    })


  });