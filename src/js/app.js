const burgerBtn = document.querySelector('.burger-menu');
const navbar = document.querySelector('.nav');
const menuLinks = document.querySelector('.menu-links');
const navBtn = document.querySelector('.nav-btn');

burgerBtn.addEventListener('click', () => {
    if (navbar.classList.contains('column')) {
        navbar.classList.remove('column');
        menuLinks.classList.remove('dflex');
        navBtn.classList.remove('dflex');
        burgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        navbar.classList.add('column');
        menuLinks.classList.add('dflex');
        navBtn.classList.add('dflex');
        burgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});
