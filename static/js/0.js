$(function() {

    var name = "";
    $('.Button-style').on('click', function() {
        name = $(".text").val();
        console.log(name)
        // window.location.href = "/00";
        storage.setItem("name", JSON.stringify(name));//これが本体
        viewStorage("name");
      })
      
      $('.Character_btn1').on('click', function(){
        let url = "/static/img/bear.png"
        $('a').attr('img');
        console.log(url)
    });

  });