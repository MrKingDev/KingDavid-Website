// This is how the mobile nav open and closes
const nav_hamburger = document.querySelector('.nav-hamburger');
const nav_mobile = document.querySelector('.mobile-nav');

nav_hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active');
})