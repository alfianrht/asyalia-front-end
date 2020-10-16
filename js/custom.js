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

// All Section
var dressSec = $("#dress").offset().top;
var typeSec = $("#type").offset().top;
var colorSec = $("#color").offset().top;
var sizeSec = $("#size").offset().top;
var lenghtSec = $("#lenght").offset().top;
var khimarSec = $("#khimar").offset().top;
var niqobSec = $("#niqob").offset().top;

$("#nextButton").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: dressSec
  }, 500);
});

var $w = $(window).scroll(function(){
  
    if ( $w.scrollTop() < dressSec ) {   
      $("#nextButton").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: dressSec
        }, 500);
      });
      $("#nextButton").html('PILIH DRESS');
    }
    if ( $w.scrollTop() >= dressSec ) {   
      $("#nextButton").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: typeSec
        }, 500);
      });
      $("#nextButton").html('PILIH TYPE');
    }
    if ( $w.scrollTop() > typeSec ) {   
      $("#nextButton").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: colorSec
        }, 500);
      });
      $("#nextButton").html('PILIH COLOR');
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


$('input[type="checkbox"]').on('change', function() {

    if($(this).is('input[name="dressCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: typeSec
      }, 500);
    if($(this).is('input[name="typeCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: colorSec
      }, 500);
    if($(this).is('input[name="colorCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: sizeSec
      }, 500);
    if($(this).is('input[name="sizeCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: lenghtSec
      }, 500);
    if($(this).is('input[name="lenghtCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: khimarSec
      }, 500);
    if($(this).is('input[name="khimarCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: niqobSec
      }, 500);
});