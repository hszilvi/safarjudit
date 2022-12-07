const hamburgerBtn = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.primary-nav-mobile-wrapper');

hamburgerBtn.addEventListener('click', () => {
    if (!hamburgerBtn.classList.contains('open')) {
        hamburgerBtn.classList.add('open');
        hamburgerMenu.style.display = 'block';

    } else {
        hamburgerBtn.classList.remove('open');
        hamburgerMenu.style.display = 'none';
    }
});