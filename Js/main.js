// *************initialisation slick************


$(document).ready(function () {
  $('.slider').slick({
  });
});





$(function () {

  // ************************nav*****************



  $('i.test').click(function () {
    $('nav.nav-bar').slideToggle(1000)
    $('i.test').toggleClass('fa-solid')
    $('i.test').toggleClass('cross')
  })

  $('.club').click(function () {
    $('.club1').slideToggle(1000)
  })

  $('.entrainement').click(function () {
    $('.entrainement1').slideToggle(1000)
  })

  $('.competitions').click(function () {
    $('.competitions1').slideToggle(1000)
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


// ******************************changement d'image background******************************

const images = ['url(https://picsum.photos/800/800)', 'url(https://picsum.photos/800/700)', 'url(https://picsum.photos/700/800)', 'url(../img/homme-pingpong.jpg)'];

let currentIndex = 0;
const background = document.getElementById('back');

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  background.style.backgroundImage = images[currentIndex];
}, 10000);





// ******************************apparition animation our club*****************************
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotateInUpRight');
      observer.unobserve(entry.target);
    }
  });
}

const rotateInSection = document.querySelector('.rotateInUpRight');
const slideInSection = document.querySelectorAll('.animation-1');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8 // Pourcentage de visibilité nécessaire pour déclencher l'animation
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

if (rotateInSection) {
  observer.observe(rotateInSection);
}

slideInSection.forEach(section => {
  observer.observe(section);
});



function handlesection(entries, obser) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotateInDownRight');
      obser.unobserve(entry.target);
    }
  });
}

const rotate = document.querySelector('.rotateInDownRight');
const slideIn = document.querySelectorAll('.animation-2');


const observerOpt = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8 // Pourcentage de visibilité nécessaire pour déclencher l'animation
};

const obser = new IntersectionObserver(handlesection, observerOpt);

if (rotate) {
  obser.observe(rotate);
}

slideIn.forEach(section => {
  obser.observe(section);
});



function apparaitdroite(entries,obserright){
  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('right');
      obserright.unobserve(entry.target)
    }
  });
}

const apear = document.querySelector('.right');
const droite = document.querySelectorAll('.animation-droite')

const obsOpt = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4 // Pourcentage de visibilité nécessaire pour déclencher l'animation
};

const obserright = new IntersectionObserver(apparaitdroite, obsOpt);

if (apear) {
  obserright.observe(apear)
}

droite.forEach(section => {
  obserright.observe(section)
})

function apparaitgauche(entries,obserleft){
  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('left');
      obserleft.unobserve(entry.target)
    }
  });
}

const apparait = document.querySelector('.left');
const gauche = document.querySelectorAll('.animation-gauche')

const obsOptleft = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4 // Pourcentage de visibilité nécessaire pour déclencher l'animation
};

const obserleft = new IntersectionObserver(apparaitgauche, obsOptleft);

if (apparait) {
  obserleft.observe(apparait)
}

gauche.forEach(section => {
  obserleft.observe(section)
})