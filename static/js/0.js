$(function() {
    $('.Button-style').click(function(e) {
      e.preventDefault();  // ボタン押下時のサブミット動作を抑制
      var val = $('.check').val();
      console.log(val);
    });
  });