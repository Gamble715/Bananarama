$(document).ready(function(){
	$('.nav-item').hover(
       function(){ $(this).addClass('active') },
       function(){ $(this).removeClass('active') }
	)

	var  mn = $(".main-nav");
  mns = "main-nav-scrolled";
  hdr = $('.orbit-container').height() - $(".main-nav").height() - $(".nav-header").height() - 10;

	// $(window).mousemove(function() {
 //  		if( $(this).scrollTop() > hdr ) {
 //    		mn.addClass(mns);
 //  		} else {
 //    		mn.removeClass(mns);
 //  		}
	// });
});