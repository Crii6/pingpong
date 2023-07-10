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
      breakpoint: 1168,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 980,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '14px',
        focusOnSelect: true,
        slidesToShow: 1
      }
    }
  ]
    });
  });
  

