reveals = document.querySelectorAll('.reveal');

function getRect() {
    const windowHeight = window.innerHeight;
    reveals.forEach(reveal => {
        const {top, bottom} = reveal.getBoundingClientRect();
        if (windowHeight > top  || bottom <= 0) {
           reveal.classList.add('reveal_active');
        } else {
           reveal.classList.remove('reveal_active');
        }   

    });   
}

document.addEventListener('scroll', getRect);
