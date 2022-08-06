// Stiky Navbar
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("stiky", window.scrollY > 300)
})

// Parallax Effect
const parallax3 = document.querySelector('.parallax-3');
const parallax2 = document.querySelector('.parallax-2');
const parallax1 = document.querySelector('.parallax-1');
const birds = document.querySelector('.birds');

window.addEventListener('scroll', function () {
    const value = window.scrollY;

    birds.style.left = value * 1.5 + 'px';
    birds.style.top = value * 0.9 + 'px';
    parallax3.style.top = value * 0.9 + 'px';    
    parallax2.style.top = value * 0.5 + 'px';    
})

// Parallax Text
const webtitle = document.querySelector('.parallax .container .website-title');

window.addEventListener('scroll', function() {
    const value = window.scrollY;

    webtitle.style.left = value * 0.9 + 'px';
})

// Toggle Menu
const toggleMenu = document.querySelector('.navbar .toggle-menu');
const slide = document.querySelector('.navbar .nav-menu');
toggleMenu.addEventListener('click', function() {
    toggleMenu.classList.toggle('hamburger-menu');
    slide.classList.toggle('slide');
});