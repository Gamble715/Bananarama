(function() {
  function moveScroller() {
      var move = function() {

          var st = $(window).scrollTop();
          var ot = $("#scroller-anchor").position().top;
          // console.log(st)
          var s = $(".scroll");
          var f = $(".filler")
          if(st > 540) {
              s.css({
                  position: "fixed",
                  top: 160,
                  width: "100%"
              });
              f.css({
                position: "relative",
                top: 50
              });
          } else {
              if(st <= 540) {
                  s.css({
                      position: "relative",
                      top: 0
                  });
              }
          }
      };
      $(window).scroll(function() {
        move()
      });
      move();
  };
  moveScroller();
})();