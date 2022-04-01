let preLoader = document.querySelector(".preloader");
let video = document.querySelector('.video-container');
let btn = document.querySelector('.switch-btn');

window.addEventListener("load", myFunction);
function myFunction() {
  preLoader.classList.add('hide-preloader')
};

btn.addEventListener('click', function(){
  if(!btn.classList.contains('slide')){
    btn.classList.add("slide")
    video.pause();
    console.log('Video stoped')
  } else {
    btn.classList.remove("slide")
    video.play();
    console.log('Video started')
  }
});