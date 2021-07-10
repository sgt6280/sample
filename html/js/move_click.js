// JavaScript Document
$(function(){
$('.sample14').click(function(e){
  $('.sample14_circle').css({
    left: e.pageX - $(this).offset().left - 15 + 'px',
    top: e.pageY - $(this).offset().top - 15 + 'px'
  });
  return false;
});
});