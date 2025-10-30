// ===========================
// Cherry Blossom Animation
// ===========================
function createCherryBlossoms() {
    const container = document.getElementById('cherryBlossoms');
    const petalCount = 30;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Random starting position
        const startX = Math.random() * 100;
        petal.style.left = startX + '%';
        
        // Random animation duration (15-30 seconds)
        const duration = 15 + Math.random() * 15;
        petal.style.animationDuration = duration + 's';
        
        // Random delay for staggered effect
        const delay = Math.random() * 10;
        petal.style.animationDelay = delay + 's';
        
        // Random size variation
        const size = 8 + Math.random() * 6;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        container.appendChild(petal);
    }
}

// ===========================
// Smooth Scroll Function
// ===========================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===========================
// Fade-in Animation on Scroll
// ===========================
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Element is visible in viewport
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            // Get delay from data attribute if exists
            const delay = element.getAttribute('data-delay') || 0;
            
            setTimeout(() => {
                element.classList.add('visible');
            }, parseInt(delay));
        }
    });
}

// ===========================
// Lightbox Gallery Functions
// ===========================
let currentImageIndex = 0;
const galleryImages = [
    'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=1920&h=1920&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=1920&fit=crop',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&h=1920&fit=crop',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1920&fit=crop',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1920&h=1920&fit=crop',
    'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=1920&h=1920&fit=crop&sat=-100',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=1920&fit=crop&sat=-100',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&h=1920&fit=crop&sat=-100'
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = galleryImages[currentImageIndex];
    lightbox.classList.add('active');
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    currentImageIndex += direction;
    
    // Loop around if at boundaries
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = galleryImages[currentImageIndex];
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    }
});

// ===========================
// Timeline Animation Enhancement
// ===========================
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.8) {
            const dot = item.querySelector('.timeline-dot');
            const content = item.querySelector('.timeline-content');
            
            setTimeout(() => {
                dot.style.animation = 'dotPop 0.5s ease forwards';
                content.style.animation = 'slideIn 0.6s ease forwards';
            }, index * 200);
        }
    });
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes dotPop {
        0% {
            transform: translateX(-50%) scale(0);
            opacity: 0;
        }
        50% {
            transform: translateX(-50%) scale(1.3);
        }
        100% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
        }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Parallax Effect for Hero Section
// ===========================
function handleParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
}

// ===========================
// Add Sparkle Effect to CTA Button
// ===========================
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 5px;
        height: 5px;
        background: radial-gradient(circle, #d4af37, transparent);
        border-radius: 50%;
        pointer-events: none;
        animation: sparkleAnim 1s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnim {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// ===========================
// Initialize on Page Load
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Create cherry blossoms
    createCherryBlossoms();
    
    // Initial scroll animation check
    handleScrollAnimations();
    animateTimeline();
    
    // Add CTA button sparkle effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mousemove', (e) => {
            const rect = ctaButton.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
            
            if (Math.random() > 0.7) {
                createSparkle(x, y);
            }
        });
    }
    
    // Add hover effect to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.zIndex = '1';
        });
    });
});

// ===========================
// Event Listeners
// ===========================
window.addEventListener('scroll', () => {
    handleScrollAnimations();
    animateTimeline();
    handleParallax();
});

// Throttle scroll events for better performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScrollAnimations();
            animateTimeline();
            handleParallax();
            ticking = false;
        });
        ticking = true;
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    handleScrollAnimations();
});

// Add smooth reveal for letter section
const letterContainer = document.querySelector('.letter-container');
if (letterContainer) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInScale 1s ease forwards';
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(letterContainer);
}

// Add fade in scale animation
const fadeInScaleStyle = document.createElement('style');
fadeInScaleStyle.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(fadeInScaleStyle);

// ===========================
// Loading Animation
// ===========================
window.addEventListener('load', () => {
    // Add a small delay before showing content for a polished feel
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Easter Egg: Click hearts in final section
// ===========================
const hearts = document.querySelectorAll('.hearts i');
hearts.forEach(heart => {
    heart.addEventListener('click', (e) => {
        // Create floating heart
        const floatingHeart = document.createElement('i');
        floatingHeart.className = 'fas fa-heart';
        floatingHeart.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            color: #d4af37;
            font-size: 2rem;
            pointer-events: none;
            z-index: 9999;
            animation: floatUp 2s ease-out forwards;
        `;
        
        document.body.appendChild(floatingHeart);
        
        setTimeout(() => floatingHeart.remove(), 2000);
    });
});

// Float up animation for clicked hearts
const floatUpStyle = document.createElement('style');
floatUpStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatUpStyle);
