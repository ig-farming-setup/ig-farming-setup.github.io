// site.js - Standard JavaScript for Multilogin Instagram Farming Site

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for CTAs
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = 'Loading...';
        this.style.opacity = '0.7';
        // Simulate loading (remove in production)
        setTimeout(() => {
            this.innerHTML = this.dataset.originalText || 'Get Started';
            this.style.opacity = '1';
        }, 1000);
    });
});

// Lazy load images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Track affiliate clicks (optional analytics)
document.querySelectorAll('a[href*="multilogin.com"]').forEach(link => {
    link.addEventListener('click', function() {
        // Add your analytics tracking here
        console.log('Affiliate link clicked:', this.href);
    });
});

// Mobile menu toggle (if needed)
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Store original button text
    document.querySelectorAll('.cta-button').forEach(button => {
        button.dataset.originalText = button.innerHTML;
    });

    // Add any initialization code here
    console.log('Multilogin Setup Expert site loaded');
});