console.log('hello judit');
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

// const openAdultBtn = document.querySelector('#adult-button');
// openAdultBtn.addEventListener('click', () => {
//     window.open('/public/services.html');
// } );
// const openChildBtn = document.querySelector('#child-button');
// openChildBtn.addEventListener('click', () => {
//     window.open('/public/services.html');
// });