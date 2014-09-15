(function() {

  $.stellar({
  	scrollProperty: 'scroll',
  	 verticalScrolling: true,
  	 positionProperty: 'position',
  });

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

})();