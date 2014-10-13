$(document).ready(function(){
	$('.nav-item').hover(
       function(){ $(this).addClass('active') },
       function(){ $(this).removeClass('active') }
	);

  $('.nav-item').on('click', function(e) {
    window.location = $(e.target).find('a').attr('href');
  });
});