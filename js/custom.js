var wrap = $("#sliderFix");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 100) {
    wrap.addClass("fixed-slider");
  } else {
    wrap.removeClass("fixed-slider");
  }
  
});

// var header = $("#sliderFix");
//   $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//       if (scroll >= 600) {
//         $("#dress").css({"padding-top":"90px"});
//         header.addClass("fixed-slider");
//         $(".sub-footer").css({"margin-bottom":"155px"});

//       } else {
//         $("#dress").css({"padding-top":"140px"});
//         header.removeClass("fixed-slider");
//       }
// });

// Button Slider
$("#buttonDress").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: $("#dress").offset().top
  }, 500);
});



// Navigasi Scroll

$("#nextButton").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: $("#dress").offset().top
  }, 500);
});

var targetOffset = $("#dress").offset().top;

var $w = $(window).scroll(function(){
  
    if ( $w.scrollTop() > targetOffset ) {   
      $("#nextButton").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#dress").offset().top
        }, 500);
      });
      // $("#nextButton").html('PILIH DRESS');
    } else {
      $("#nextButton").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#dress").offset().top
        }, 500);
      });
    }
});

// Single Checkbox
$('input[type="checkbox"]').on('change', function() {
  $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});