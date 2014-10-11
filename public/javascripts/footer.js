(function() {



  function moveScroller() {
      var move = function() {

          var st = $(window).scrollTop();
          var ot = $("#scroller-anchor").position().top;
          // console.log(st)
          var s = $(".scroll");
          var f = $(".filler")
          if(st > 640) {
              s.css({
                  position: "fixed",
                  top: 60
              });
              f.css({
                position: "relative",
                top: 50
              });
          } else {
              if(st <= 640) {
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