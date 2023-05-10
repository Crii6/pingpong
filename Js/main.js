// ************************nav*****************

$(function(){

 $('i.fa-bars').click(function(){
    $('nav.nav-bar').slideToggle(1000)
 })

$('.club').click(function(){
    $('.club1').slideToggle(1000)
})

$('.entrainement').click(function(){
    $('.entrainement1').slideToggle(1000)
})

$('.competitions').click(function(){
    $('.competitions1').slideToggle(1000)
})

})


// ******************************changement d'image background******************************

const images = [  'url(https://picsum.photos/800/800)',  'url(https://picsum.photos/800/700)',  'url(https://picsum.photos/700/800)', 'url(../img/homme-pingpong.jpg)'];

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
        observer.unobserve(entry.target);
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