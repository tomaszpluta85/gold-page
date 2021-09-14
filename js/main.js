const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');



const handleNav = () => {
    console.log('click');
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
};
console.log(navBtn);
navBtn.addEventListener('click', handleNav);


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
};

handleCurrentYear();