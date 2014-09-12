(function() {

  // $.stellar({
  // 	scrollProperty: 'scroll',
  // 	 verticalScrolling: true,
  // 	 positionProperty: 'position',
  // });

  // $.stellar.positionProperty.position = {
  //   setTop: function($element, newTop, originalTop) {
  //     $element.css('top', newTop);
  //   	console.log($element.position());
  //   },
  //   setLeft: function($element, newLeft, originalLeft) {
  //     $element.css('left', newLeft);
  //   }
  // }

  function moveScroller() {
      var move = function() {
          var st = $(window).scrollTop();
          var ot = $("#scroller-anchor").offset().top;
          var s = $(".scroll");
          if(st > ot) {
              s.css({
                  position: "fixed",
                  top: "0px"
              });
          } else {
              if(st <= ot) {
                  s.css({
                      position: "relative",
                      top: ""
                  });
              }
          }
      };
      $(window).scroll(move);
      move();
  };

  moveScroller();


			// $.stellar.positionProperty.position.setTop($('.scroll'), 0, 0);

	// $(window).scroll(function() {
	//   if ($.stellar.scrollProperty.scroll.getTop($(window)) >= 312) {
	//   	console.log("euyd");
	//   	// $.stellar.positionProperty.position.setTop($(window), 312)
	//   	// console.log($.stellar.positionProperty.limit.setTop($('footer'), 400, 0));
	//   	// console.log($('footer')[0].attributes);
	// 	  // console.log($.stellar.positionProperty.position.setTop($('footer'), 312, 0));
	// 	  // console.log($.stellar.scrollProperty.scroll.getTop($(window)));
	//   }
	// });





})();