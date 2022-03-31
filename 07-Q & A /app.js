let btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){

    btn.addEventListener('click', function(e){
        let items = e.currentTarget.parentElement.parentElement;
        items.classList.toggle('show-text');
    });
});
