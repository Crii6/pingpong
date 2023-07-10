// *************initialisation slick************


$(document).ready(function () {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 9000,
      pauseOnHover: true,
    });
  });


$(document).ready(function () {
    $('.inscription-slider').slick({
        centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '15px',
        focusOnSelect: true,
        slidesToShow: 1,
        blur: true
      }
    }
  ]
    });
  });
  

