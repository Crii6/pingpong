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
        centerMode: false,
      centerPadding: '20px',
      slidesToShow: 3,
      responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 980,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '150px',
        focusOnSelect: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 870,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '120px',
        focusOnSelect: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
        focusOnSelect: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 640,
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
  

