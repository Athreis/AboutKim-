// hamburger

const navigasiMobile = document.querySelector ('#hamburger');
const navbar = document.querySelector ('#NavBar')
 
navigasiMobile.addEventListener('click', function(){
    navigasiMobile.classList.toggle('navigasimobile-active');
    navbar.classList.toggle('hidden');
    
});



//navbar fxed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    } else{
        header.classList.remove('navbar-fixed')
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const spotifyCounter = document.getElementById('spotifyCounter');
    const youtubeCounter = document.getElementById('youtubeCounter');
    const instagramCounter = document.getElementById('instagramCounter');
  
    function updateCounter(element, count) {
      element.textContent = count.toLocaleString();
    }
  
    function startCounter(element, maxCount, delay) {
      let count = 4000;
  
      function incrementCounter() {
        count += 1;
        updateCounter(element, count);
  
        if (count < maxCount) {
          setTimeout(incrementCounter, delay);
        }
      }
  
      incrementCounter();
    }
  
    // Panggil fungsi startCounter untuk setiap elemen dengan kecepatan 5 detik
    startCounter(spotifyCounter, 4089); // Ganti nilai sesuai kebutuhan
    startCounter(youtubeCounter, 10200); // Ganti nilai sesuai kebutuhan
    startCounter(instagramCounter, 14700); // Ganti nilai sesuai kebutuhan
  });
  
