// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Toggle Navbar on Mobile
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('header nav ul').classList.toggle('active');
});


// Active Navigation Highlight on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// // Form Validation
// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const name = document.querySelector('input[placeholder="Your Name"]');
//     const email = document.querySelector('input[placeholder="Your Email"]');
//     const message = document.querySelector('textarea[placeholder="Your Message"]');

//     if (name.value === '' || email.value === '' || message.value === '') {
//         alert('Please fill out all fields.');
//     } else {
//         alert('Thank you for contacting!');
//         form.reset();
//     }
// });

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            revealElements[i].classList.add('active');
        } else {
            revealElements[i].classList.remove('active');
        }
    }
});
