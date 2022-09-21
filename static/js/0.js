$(function() {
    $('.Button-style').on('click', function() {
        window.location.href = "/00";
        var name = "";
        name = "久保建英";
        storage.setItem("name", JSON.stringify(name));//これが本体
      })
      
  });