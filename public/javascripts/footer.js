(function() {

  function moveScroller() {
      var move = function() {

          var st = $(window).scrollTop();
          var ot = $("#scroller-anchor").position().top;
          // console.log(st)
          var s = $(".scroll");
          var header = $("div.nav-header");
          var itemImg = $(".nav-item > a > img");
          console.log(st)
          if(st > 540) {
              s.css({
                  position: "fixed",
                  top: 40,
                  maxWidth: "1200px"
              });
              header.css({
                height: "140px"
              });
              itemImg.css({
                marginTop: "12px"
              })
          } else {
              if(st <= 540) {
                  s.css({
                      position: "relative",
                      top: 0,
                      width: "100%"
                  });
                  header.css({
                    height: "60px"
                  });
                  itemImg.css({
                    marginTop: "0px"
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