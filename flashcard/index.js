var box = document.querySelector('.thecard');

box.addEventListener("click",function(){
    if (box.classList.contains('active')){
        box.classList.remove('active');
    } else{
        box.classList.add('active')
    }
});