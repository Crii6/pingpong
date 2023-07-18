
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

    $('#inscription-dossier1').click(function() {
      $('.slick-prev').css({ display: "none" })
      $('.slick-next').css({ display: "none" })
      $('#inscription-modal').slideToggle(600)
      $('#inscription-modal2').slideUp(600)
      $('#inscription-modal3').slideUp(600)
    })

    $('#insciption-ferme1').click(function() {
      $('#inscription-modal').slideToggle(600)
      $('.slick-prev').css({ display: "initial" })
      $('.slick-next').css({ display: "initial" })
    })



    $('#inscription-dossier2').click(function() {
      $('.slick-prev').css({ display: "none" })
      $('.slick-next').css({ display: "none" })
      $('#inscription-modal2').slideToggle(600)
      $('#inscription-modal').slideUp(600)
      $('#inscription-modal3').slideUp(600)
    })

    $('#insciption-ferme2').click(function() {
      $('#inscription-modal2').slideToggle(600)
      $('.slick-prev').css({ display: "initial" })
      $('.slick-next').css({ display: "initial" })
    })



    $('#inscription-dossier3').click(function() {
      $('.slick-prev').css({ display: "none" })
      $('.slick-next').css({ display: "none" })
      $('#inscription-modal3').slideToggle(600)
      $('#inscription-modal').slideUp(600)
      $('#inscription-modal2').slideUp(600)
    })

    $('#insciption-ferme3').click(function() {
      $('#inscription-modal3').slideToggle(600)
      $('.slick-prev').css({ display: "initial" })
      $('.slick-next').css({ display: "initial" })
    })

    


  
  })