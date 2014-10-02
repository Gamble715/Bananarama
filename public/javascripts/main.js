$(document).ready(function(){
	$('.nav-item').hover(
       function(){ $(this).addClass('active') },
       function(){ $(this).removeClass('active') }
	)

	var  mn = $(".main-nav");
  mns = "main-nav-scrolled";
  hdr = $('.orbit-container').height() - $(".main-nav").height() - $(".nav-header").height() - 10;

	$(window).mousemove(function() {
		console.log($(this).scrollTop());
  		if( $(this).scrollTop() > hdr ) {
  			console.log("sticky");
    		mn.addClass(mns);
  		} else {
    		mn.removeClass(mns);
  		}
	});
});