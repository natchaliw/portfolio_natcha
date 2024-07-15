// ==================================== Typed ========================================
const typed = new Typed("#text-typed" , {
    strings:["Front-End Developer.","Influencer."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});


// ============================= Add & Remove Toggle and Navbar =======================
const menuIcon = document.querySelector ('#menu-icon');
const navbar = document.querySelector ('.navbar');
const navLink = document.querySelectorAll('.nav-link');

//Open and close navbar when Click menu Icon
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

//Close navbar when click outside
document.addEventListener('click',(e)=>{
    if(!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
});

//Close navbar when click link
navLink.forEach((e)=>{
    e.addEventListener('click',()=>{
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
        }
    )
});


// ================================ Add color header =====================================
const header = document.querySelector('#header');

window.addEventListener('scroll',()=>{
    this.scrollY >= 50 ? header.classList.add ('color-header') 
                       : header.classList.remove ('color-header')
});


// ================================ Show Scroll-Up =======================================
const scrollUp = document.querySelector('.scroll-up-icon');

window.addEventListener('scroll',()=>{
    this.scrollY >= 350 ? scrollUp.classList.add ('show-scroll-up') 
                       : scrollUp.classList.remove ('show-scroll-up')
});


// =========================== Scroll Sections Active link ===============================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll',()=>{
    const scrollDown = window.scrollY
    
    sections.forEach(current=>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.navbar a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    });
});


// ================================= EmailJS =============================================
const contactForm = document.querySelector('#contact-form');
const contactMessage = document.querySelector('#contact-message');

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_8rzhu8t','template_ej4lz5g','#contact-form','eASQS_MmZwGprF0NG')
    .then(()=>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after 5s
        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)

        // Clear Input Fields
        contactForm.reset()
    }, ()=>{
        // Show sent message error
        contactMessage.textContent = 'Message not sent (service error) ❌'
    });
});


// ============================ Scroll Reveal Animation =======================================
ScrollReveal ({
    distance: '80px',
    duration: 1000
});

// ==================== Home ====================
ScrollReveal().reveal('.logo', {origin: 'left', duration: 1000});
ScrollReveal().reveal('.greeting h6', {origin: 'top', duration: 500 ,delay: 400});
ScrollReveal().reveal('.introduce h1, .introduce h2', {origin: 'left', duration: 1000 , delay: 300});
ScrollReveal().reveal('.introduce p', {origin: 'right', duration: 500 , delay: 400});
ScrollReveal().reveal('.social-icon', {origin: 'right', duration: 500 , delay: 300});
ScrollReveal().reveal('.link-connect', {origin: 'bottom', duration: 500 , delay: 300});
ScrollReveal().reveal('.home-img', {origin: 'right', duration: 500, delay: 300});

// ==================== About ====================
ScrollReveal().reveal('.about-img', {origin: 'left'});
ScrollReveal().reveal('.about-title', {origin: 'top'});
ScrollReveal().reveal('.about-content .description p', {origin: 'right'});
ScrollReveal().reveal('.cv-btn', {origin: 'bottom'});

// ==================== Skills ====================
ScrollReveal().reveal('.skill-title', {origin: 'top'});
ScrollReveal().reveal('.programming-skill', {origin: 'left'});
ScrollReveal().reveal('.soft-skill', {origin: 'right'});

// ==================== Projects ====================
ScrollReveal().reveal('.project-title h1', {origin: 'top'});
ScrollReveal().reveal('.project-title p', {origin: 'right'});
ScrollReveal().reveal('.project-content', {origin: 'bottom'});

// ==================== Contact ====================
ScrollReveal().reveal('.contact-title', {origin: 'top'});
ScrollReveal().reveal('.form-img', {origin: 'left'});
ScrollReveal().reveal('.form-container form', {origin: 'right'});
