let toggleBtn = document.querySelector('.sidebar-toggle');
let sideBar = document.querySelector('.sidebar');
let closeBtn = document.querySelector(".close-btn")

toggleBtn.addEventListener('click', sideBarFunk)
function sideBarFunk(){
    sideBar.classList.toggle('show-sidebar')
}

closeBtn.onclick=function(){closeFunk()};
function closeFunk(){
    sideBar.classList.remove('show-sidebar');
}
