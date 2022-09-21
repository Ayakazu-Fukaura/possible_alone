$(function() {
    
    $('.Button-style').click(function(e) {
      e.preventDefault();  // ボタン押下時のサブミット動作を抑制
      var tasks = JSON.parse(storage.getItem("tasks"));
      var val = $(tasks).val();
      console.log(val);
    });
  });