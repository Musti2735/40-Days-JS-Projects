let decrease = document.querySelector('.decrease')
let reset = document.querySelector('.reset')
let increase = document.querySelector('.increase')
let valueInfo = document.querySelector('#value')

let count = 0;

decrease.addEventListener('click', clickFunk)
increase.addEventListener('click', clickFunk)
reset.addEventListener('click', clickFunk)

function clickFunk(){
    if (this.className=='btn increase'){
        valueInfo.innerHTML = count +=1;
    }
    else if(this.className=='btn decrease'){
        valueInfo.innerHTML = count -=1;
    }
    else{
        valueInfo.innerHTML = 0;
    }
    console.log(this.className)
}






