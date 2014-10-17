(function() {

  function moveScroller() {
      var move = function() {

          var st = $(window).scrollTop();
          var ot = $("#scroller-anchor").position().top;
          // console.log(st)
          var s = $(".scroll");
          var f = $(".filler")
          console.log(st)
          if(st > 600) {
              s.css({
                  position: "fixed",
                  top: 97,
                  maxWidth: "1200px"
              });
              f.css({
                position: "relative",
                height: 65
              });
          } else {
              if(st <= 600) {
                  s.css({
                      position: "relative",
                      top: 0,
                      width: "100%"
                  });
                  f.css({
                    position: "relative",
                    height: 0
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