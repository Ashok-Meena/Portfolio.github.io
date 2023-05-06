/* ========== toggle icon link ======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/* ========== scroll section active link ======*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    /*============= sticky navbar =========*/
    let header = document.querySelector('.sticky');

    /* ========== remove toggle icon and navbar click navbar link(scroll) ========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*============= scroll reveal =========*/
const sr = ScrollReveal({
    reset: true,
    duration: 1000,
    delay: 200,
    distance: '50px',
    easing: 'ease-out'
  });
  
  sr.reveal('.home-content, .heading', { origin: 'top' });
  sr.reveal('.home-img, .services-container, .portfolio-box, .contact from', { origin: 'bottom' });
  sr.reveal('.home-contend h1, .about-img', { origin: 'right' });
  


/* =========== typed js =========*/

window.onload = function() {
    setTimeout(function() {
      const typed = new Typed('.multiple-text', {
        strings: ['Full Stack Developer', 'Web Developer', 'Java Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });
    }, 1000);
  };
  
