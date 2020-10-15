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
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        },
        1400:{
            items:6
        }
    }
})

