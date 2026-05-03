/* 
    Health Dialogue - Interaction Logic 
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Header Logic
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-reveal, .animate-reveal-left, .animate-reveal-right');
    animatedElements.forEach(el => revealObserver.observe(el));

    // 3. FAQ Accordion Logic
    // Removed interactive FAQ click handling to prevent runtime errors in this build.

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Mobile Menu Simulation (Placeholder)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            alert('Mobile menu functionality would be implemented here in a full-scale app!');
        });
    }

    // 6. Call Now Global Function
    window.callNow = () => {
        window.location.href = 'tel:+919567942700';
    };

});
