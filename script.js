// Simple interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Learn More button interaction
    const learnMoreBtn = document.getElementById('learnMore');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });

    console.log('CI Practice Site loaded successfully!');
});

// Utility function for testing
function greet(name) {
    if (!name || typeof name !== 'string') {
        return 'Hello, Guest!';
    }
    return `Hello, ${name}!`;
}

// Export for testing (Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { greet };
}
