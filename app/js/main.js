$(function() {
     
     $('.slider').slick({
          dots: true,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4
     });

     var mixer = mixitup('.products__box');


     $(".rate__star").rateYo({
          rating: 5,
          starWidth: "15px"
        });

});





