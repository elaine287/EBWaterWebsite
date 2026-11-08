document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
    
    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    if (header) {
        const updateHeaderOnScroll = () => {
            if (window.scrollY > 40) {
                header.classList.add('is-shrunk');
                if (!header.classList.contains('site-header-dynamic')) {
                    header.style.padding = '0.5rem 0';
                    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }
            } else {
                header.classList.remove('is-shrunk');
                if (!header.classList.contains('site-header-dynamic')) {
                    header.style.padding = '0';
                    header.style.boxShadow = '0 1px 10px rgba(0,0,0,0.05)';
                }
            }
        };
        window.addEventListener('scroll', updateHeaderOnScroll);
        updateHeaderOnScroll();
    }
});
