let nextBtn = document.querySelector('.nextBtn');
let prevBtn = document.querySelector('.prevBtn');
let slides = document.querySelectorAll('.slide');
let slideArea = document.querySelector('.slider-contianer')

 nextBtn.addEventListener("click", increase);
 prevBtn.addEventListener("click", decrease);

 slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });

let counter = 0;

console.log(slides[counter])

function increase(){
    counter++;
    if(counter==4){
        counter=0;
    }

    console.log(slides[counter])
    console.log(counter)
    change()
}


function decrease(){
    counter--;
    if(counter==-1){
        counter=3
       }

       console.log(slides[counter])
       console.log(counter)
    change()

}

function change(){
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;})
}
