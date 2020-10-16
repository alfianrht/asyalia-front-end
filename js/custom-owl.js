$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

$('.owl-carousel').owlCarousel({
    stagePadding: 20,
    margin: 10,
    dots:false,
    nav: true,
    navText: [
        "<i class='fas fa-chevron-circle-left'></i>",
        "<i class='fas fa-chevron-circle-right'></i>"
    ],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:7
        },
        1400:{
            items:7
        }
    }
})

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
