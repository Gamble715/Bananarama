(function() {

  function moveScroller() {
      var move = function() {

          var st = $(window).scrollTop();
          var ot = $("#scroller-anchor").position().top;
          // console.log(st)
          var s = $(".scroll");
          var header = $("div.nav-header");
          var itemImg = $(".nav-item > a > img");
          if(st > 540) {
              s.css({
                  position: "fixed",
                  top: 40,
                  maxWidth: "1200px"
              });
              header.css({
                height: "140px"
              });
          } else {
              console.log("bam");
              s.css({
                  position: "relative",
                  top: 0,
                  width: "100%"
              });
              header.css({
                height: "60px"
              });
          }
      };
      $(window).scroll(function() {
        move();
      });
      move();
  };
  moveScroller();
})();