var wrap = $("#sliderFix");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 100) {
    wrap.addClass("fixed-slider");
  } else {
    wrap.removeClass("fixed-slider");
  }
  
});

var header = $("#sliderFix");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
       if (scroll >= 600) {
          header.addClass("fixed-slider");
        } else {
          header.removeClass("fixed-slider");
        }
});