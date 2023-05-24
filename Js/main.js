

// ******************************Navigation au scroll******************************
window.addEventListener('scroll', function() {
  var scro = document.getElementById('logo-nav');
  let nav = document.getElementById('nav')
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    scro.classList.remove('nav-scroll');
    nav.classList.remove('nav-bar-scroll')
  } else {
    scro.classList.add('nav-scroll');
    nav.classList.add('nav-bar-scroll');
  }
});

// ******************************changement d'image background******************************

const images = [  'url(../img/Photo-concours.png)', 'url(../img/pexels-magda-ehlers-4080060.jpg)', 'url(../img/homme-pingpong.jpg)'];

let currentIndex = 0;
const background = document.getElementById('back');

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  background.style.backgroundImage = images[currentIndex];
}, 10000);





// ******************************************apparition animation our club***************************************
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

// ******************************************apparition animation Dernière infos***************************************


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

