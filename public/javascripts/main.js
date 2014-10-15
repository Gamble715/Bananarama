$(document).ready(function(){
	$('.nav-item').hover(
       function(){ $(this).addClass('active') },
       function(){ $(this).removeClass('active') }
	)

  $('#main-hero').slick({
    accessibility: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500
  });
  $('#fact-slider').slick({
    accessibility: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500
  });
});


