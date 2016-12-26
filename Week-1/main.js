$(function(){
  var num = 0;
  $('#my-button').click(function() {
    num = num+1;
    $('#output').html(num);
  });
  $('#output').html(num);
});