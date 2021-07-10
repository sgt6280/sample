// JavaScript Document
$(function() {
	
	$(".gnav_ovelay").toggleClass("firstHide");
	$(".gnav_toggler").click(function(){
		$(this).toggleClass("active");
		$(".gnav_ovelay").toggleClass("menuOpen");

});
});