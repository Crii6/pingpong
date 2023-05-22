
  $(function () {
  
    // ************************nav*****************
  
   
  
  
    $('i.test').click(function () {
      $('nav.nav-bar').slideToggle(600)
      $('i.test').toggleClass('fa-solid')
      $('i.test').toggleClass('cross')
    })
  
    $('.club').click(function () {
      $('.club1').slideToggle(600)
    })
  
    $('.entrainement').click(function () {
      $('.entrainement1').slideToggle(600)
    })
  
    $('.competitions').click(function () {
      $('.competitions1').slideToggle(600)
    })
  
    // *************************modal****************
  
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
  
  
  
  })