$(document).ready(function(){
	$('.nav-item').hover(
       function(){ $(this).addClass('active') },
       function(){ $(this).removeClass('active') }
	)

	var  mn = $(".main-nav");
 	mns = "main-nav-scrolled";
  	hdr = $('.orbit-container').height() - $(".main-nav").height() - $(".nav-header").height() - 110;
  	/*
	$(window).mousemove(function() {
		console.log("scroll" + $(this).scrollTop());
		console.log("hdr" + hdr);
   		if( $(this).scrollTop() > hdr ) {
     		mn.addClass(mns);
   		} else {
     		mn.removeClass(mns);
   		}
	});
	*/
});