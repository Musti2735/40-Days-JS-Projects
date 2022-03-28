let btn = document.querySelector('#btn');
let main = document.querySelector('#main');
let info = document.querySelector('.color');

btn.addEventListener('click', chanceColor)

function chanceColor(){
    main.style.backgroundColor = info.innerHTML =  randomColor()

}

colorList =["red", "blue", "green","yellow","grey", "hsl(205, 86%, 17%)","hsl(205, 72%, 37%)","hsl(205, 90%, 76%)","hsl(360, 71%, 66%)","hsl(125, 71%, 66%)","hsl(205, 89%, 70%)"]

function randomColor(){
    let randomNumber = Math.floor(Math.random() * colorList.length);
    let randomColor = colorList[randomNumber];
    return randomColor
}



