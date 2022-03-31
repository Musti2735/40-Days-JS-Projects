let modalBtn = document.querySelector('.modal-btn');
let closeBtn = document.querySelector('.close-btn');
let modalContent = document.querySelector('.modal-overlay')

modalBtn.addEventListener('click', modalFunk = () => 
modalContent.classList.add('open-modal'))

closeBtn.addEventListener('click', closeFunk = () =>
modalContent.classList.remove('open-modal'))