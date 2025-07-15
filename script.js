const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
        
menuToggle.addEventListener('click', () => {
    if (mobileMenu.style.left === '0px') {
        mobileMenu.style.left = '-100%';
        mobileMenu.style.left = '-100%';
        menuIcon.classList.remove('hidden');
        menuIcon.classList.add('block');
        closeIcon.classList.add('hidden');
        closeIcon.classList.remove('block');
    } 
    else {
        mobileMenu.style.left = '0px';
        menuIcon.classList.add('hidden');
        menuIcon.classList.remove('block');
        closeIcon.classList.remove('hidden');
        closeIcon.classList.add('block');
    }
});
        
// Close menu when clicking on links
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.left = '-100%';
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});