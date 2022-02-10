$(function() {
// slick-slider
     $('.slider').slick({
          dots: true,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4
     });

// burger
     $('.menu__btn').on('click', function () {
          $('.menu__list').slideToggle();
     });
     
     $('.header__btn-menu').on('click', function () {
          $('.header__box').toggleClass('active');
     });



// rating
     $(".rate__star").rateYo({
          rating: 5,
          starWidth: "15px"
        });

// filter-mixitup
     var mixer = mixitup('.products__box');
});





