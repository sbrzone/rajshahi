const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuList");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".upazila-menu")) {
        menu.classList.remove("active");
    }
});

// ===========================================
// 🔗 Close menu when clicking on links
// ===========================================
document.querySelectorAll('.upazila-link').forEach(link => {
    link.addEventListener('click', () => {
        // New tab will open, close the menu
        menu.classList.remove("active");
    });
});

// ===========================================
// Smooth scroll to anchors (if any)
// ===========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================================
// Image lazy loading enhancement
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        images.forEach(img => {
            img.loading = 'lazy';
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ===========================================
// Add animation to cards on scroll
// ===========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.mosque-card, .embankment-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});