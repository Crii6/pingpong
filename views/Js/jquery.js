
  $(function () {
  
    // ************************nav*****************
  
   
  
  
    $('i.test').click(function () {
      $('nav.nav-bar').slideToggle(600)
      $('i.test').toggleClass('fa-solid')
      $('i.test').toggleClass('cross')
    })
  
    $('.club').click(function () {
      $('.club1').slideToggle(600)
      $('.club').toggleClass('orange')
      $('.competitions1').slideUp(600)
      $('.competitions').removeClass('orange')
    })
  
    $('.entrainement').click(function () {
      $('.entrainement1').slideToggle(600)
    })
  
    $('.competitions').click(function () {
      $('.competitions1').slideToggle(600)
      $('.competitions').toggleClass('orange')
      $('.club1').slideUp(600)
      $('.club').removeClass('orange')
    })

    $('.text-header, .container').click(function(){
      $('.club1').slideUp(600)
      $('.club').removeClass('orange')
    })
    
    $('.text-header, .container').click(function(){
      $('.competitions1').slideUp(600)
      $('.competitions').removeClass('orange')
    })
    // *************************modal text jeune accueil****************
  
    $('#open').click(function () {
      $('#open').addClass('reverse')
      setTimeout(function () {
        $('.overlay').addClass('visible')
        $('.modal').addClass('visible')
      }, 750)
  
    })
  
    $('#close').click(function () {
      $('.overlay').removeClass('visible')
      $('.modal').removeClass('visible')
      $('#open').removeClass('reverse')
    })
  
    $('.overlay').click(function () {
      $('.overlay').removeClass('visible')
      $('.modal').removeClass('visible')
      $('#open').removeClass('reverse')
    })
  
  // *************************modal inscription****************

    let defautSliderOptions = {
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
    }

if (window.matchMedia("(min-width: 980px)").matches){

  $('#inscription-dossier1').click(function(){
    $('#inscription-modal').slideDown(600)
    $('#inscription-modal2').slideUp(600)
    $('#inscription-modal3').slideUp(600)
  })

  $('#insciption-ferme1').click(function(){
    $('#inscription-modal').slideToggle(600)
  })



  $('#inscription-dossier2').click(function(){
    $('#inscription-modal2').slideDown(600)
    $('#inscription-modal').slideUp(600)
    $('#inscription-modal3').slideUp(600)
  })

  $('#insciption-ferme2').click(function(){
    $('#inscription-modal2').slideToggle(600)
  })



  $('#inscription-dossier3').click(function(){
    $('#inscription-modal3').slideDown(600)
    $('#inscription-modal').slideUp(600)
    $('#inscription-modal2').slideUp(600)
  })

  $('#insciption-ferme3').click(function(){
    $('#inscription-modal3').slideToggle(600)
  })


  

}else{

    
    $('#inscription-dossier1').click(function() {
     
      $('#inscription-modal').slideDown(600)
      $('#inscription-modal2').slideUp(600)
      $('#inscription-modal3').slideUp(600)
      $('.inscription-slider').slick('unslick');

      // Réinitialiser le carrousel avec swipe désactivé
      $('.inscription-slider').slick({
        swipe: false,
        arrows: false
      });
    })
    
    $('#insciption-ferme1').click(function() {
      $('#inscription-modal').slideToggle(600)
      
      setTimeout( function() {
        $('.inscription-slider').slick('unslick');
        $('.inscription-slider').slick(defautSliderOptions);

      },600)
      
    })



    $('#inscription-dossier2').click(function() {
      
      $('#inscription-modal2').slideDown(600)
      let lienCliquable = $(this);
      lienCliquable.off('click')
      $('#inscription-modal').slideUp(600)
      $('#inscription-modal3').slideUp(600)
      let currentIndex = $('.inscription-slider').slick('slickCurrentSlide');
      
        $('.inscription-slider').slick('unslick');
        
        $('.inscription-slider').slick({
          swipe: false,
          arrows: false
        });
        $('.inscription-slider').slick('slickGoTo', currentIndex, true);
      
      
      // Réinitialiser le carrousel avec swipe désactivé
      
      $('#insciption-ferme2').click(function() {
        $('#inscription-modal2').slideToggle(600)
        
        setTimeout( function() {
          $('.inscription-slider').slick('unslick');
          $('.inscription-slider').slick(defautSliderOptions);
          $('.inscription-slider').slick('slickGoTo', currentIndex, true);
          $('#inscription-dossier2').one('click', function() {
            $('#inscription-modal2').slideDown(600);
            $('#inscription-modal').slideUp(600);
            $('#inscription-modal3').slideUp(600);
      
            var currentIndex = $('.inscription-slider').slick('slickCurrentSlide');
      
            $('.inscription-slider').slick('unslick');
      
            $('.inscription-slider').slick({
              swipe: false,
              arrows: false
            });
      
            $('.inscription-slider').slick('slickGoTo', currentIndex, true);
          });
        },600)
      })
      
    })


    $('#inscription-dossier3').click(function() {
      
      $('#inscription-modal3').slideDown(600)
      let lienCliquable = $(this);
      lienCliquable.off('click')
      $('#inscription-modal').slideUp(600)
      $('#inscription-modal2').slideUp(600)
      $('.inscription-slider').slick('unslick');
      
      let currentIndex = $('.inscription-slider').slick('slickCurrentSlide');
      // Réinitialiser le carrousel avec swipe désactivé
      $('.inscription-slider').slick({
        swipe: false,
        arrows: false
      });
      $('.inscription-slider').slick('slickGoTo', currentIndex, true);
      
      $('#insciption-ferme3').click(function() {
        $('#inscription-modal3').slideToggle(600)
     
      setTimeout( function() {
        $('.inscription-slider').slick('unslick');
        $('.inscription-slider').slick(defautSliderOptions);
        $('.inscription-slider').slick('slickGoTo', currentIndex, true);
        $('#inscription-dossier3').one('click', function() {
          $('#inscription-modal3').slideDown(600);
          $('#inscription-modal').slideUp(600);
          $('#inscription-modal2').slideUp(600);
    
          var currentIndex = $('.inscription-slider').slick('slickCurrentSlide');
    
          $('.inscription-slider').slick('unslick');
    
          $('.inscription-slider').slick({
            swipe: false,
            arrows: false
          });
    
          $('.inscription-slider').slick('slickGoTo', currentIndex, true);
        });
      },600)
    })
    
  })
    
}


  
  })