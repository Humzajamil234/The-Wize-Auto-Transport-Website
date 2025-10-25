// script.js
// Simple Protection Script
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Developer Tools Protection  
document.addEventListener('keydown', function(e) {
    // Block F12
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    // Block Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }
    // Block Ctrl+U
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
});

// Console Warning
console.log('%c🔒 STOP!', 'color: red; font-size: 30px; font-weight: bold;');
console.log('%cThis website is protected by copyright.', 'color: orange; font-size: 16px;');
console.log('%cThe Wize Auto Transport - All rights reserved', 'color: orange; font-size: 14px;');

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // FAQ Toggle
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const toggle = question.querySelector('.faq-toggle');
            
            answer.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    });

    // Quote Form Submission
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your quote request! We will contact you shortly.');
            this.reset();
        });
    }

    // Initialize GSAP Animations
    initAnimations();
});

// GSAP Animations
function initAnimations() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded, animations disabled');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Hero animation
    gsap.to('.hero h1', { opacity: 1, y: 0, duration: 1, delay: 0.2 });
    gsap.to('.hero p', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.to('.hero .btn', { opacity: 1, y: 0, duration: 1, delay: 0.8 });

    // Feature cards animation
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
        });
    });

    // About image animation
    gsap.to('.about-image', {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    });

    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
        });
    });

    // Steps animation
    gsap.utils.toArray('.step').forEach((step, i) => {
        gsap.to(step, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: step,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
        });
    });

    // FAQ items animation
    gsap.utils.toArray('.faq-item').forEach((item, i) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
        });
    });

    // Contact animation
    gsap.to('.contact-info', {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.to('.contact-form', {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        },
        delay: 0.3
    });

    // Service detail animations
    gsap.utils.toArray('.service-detail').forEach((detail, i) => {
        gsap.to(detail, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: detail,
                start: 'top 70%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse'
            },
            delay: i * 0.2
        });
    });

    // Smooth scroll to specific service when URL has hash
    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.hash) {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 500);
            }
        }
    });
    
    // Stats animation
    gsap.utils.toArray('.stat').forEach((stat, i) => {
        gsap.from(stat, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});