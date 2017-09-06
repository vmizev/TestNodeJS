export default function() {
    let burger = document.querySelector('.nav-toggle');
    let menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
};

