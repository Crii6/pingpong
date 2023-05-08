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



// let scale = 1.0;
// let maxscale = 1.29

// setInterval(function() {
//     scale += 0.003;
//     background.style.transform = "scale(" + scale + ")";
//     if(scale >= maxscale){
//         scale = 1.0
//     }
//   }, 100);